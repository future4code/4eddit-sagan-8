import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import UserIcon from '../../img/Icon4eddit.png';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PostComments from './PostComments'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import PostActions from './CardActions/PostActions'
import { addComment } from '../../actions/posts/detail'

const CommentWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    margin: 5px !important;
  }
`

const useStyles = ((theme) => ({
  root: {
    margin: '100px auto',
    maxWidth: '90%',
    width: '410px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  avatar: {
    backgroundColor: red[500],
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

class PostCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      showComments: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.post && prevProps.post) {
      if (prevProps.post.commentsCount < this.props.post.commentsCount) {
        this.setState({comment: '', showComments: true})
      }
    }
  }

  onExpanded = () => {
    this.setState({ showComments: !this.state.showComments })
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  addComment = () => {
    if (this.state.comment) {
      this.props.saveComment(this.state.comment, this.props.post.id)
    }
  }

  render() {
    const { post, classes } = this.props
    const { showComments } = this.state
    return (
      <Card className={classes.root} >
        <CardHeader
          avatar={<img src={UserIcon} height="auto" alt={post.username} />}
          title={post.title}
          subheader={post.username}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.text}
          </Typography>
        </CardContent>
        <PostActions
          classes={classes}
          post={post}
          expanded={showComments}
          onExpanded={this.onExpanded}
        />
        <CommentWrapper>
          <TextField
            id="comment"
            label="Adicionar comentário"
            multiline
            rowsMax="4"
            value={this.state.comment}
            onChange={this.handleChange}
            variant="filled"
            size="small"
          />
          <Button 
            variant="contained" 
            color="primary"
            size="small" 
            onClick={this.addComment}
          >
            Comentar
          </Button>
        </CommentWrapper>
        <Collapse in={showComments} timeout="auto" unmountOnExit>
          <CardContent>
            <PostComments classes={classes} comments={post.comments} postId={post.id} />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveComment: (comment, postId) => dispatch(addComment(comment, postId)),
})

export default withStyles(useStyles)(connect(null, mapDispatchToProps)(PostCard))