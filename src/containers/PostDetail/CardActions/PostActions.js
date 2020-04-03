import React from 'react';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { votePost } from '../../../actions/posts/detail';

const Votes = styled.div`
  font-size: 0.8rem;
  margin: 2px;
`

class PostActions extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: props.expanded
    }
  }

  handleExpandClick = () => {
    const { expanded } = this.state
    this.setState({
      expanded: !expanded
    });
    this.props.onExpanded()
  };

  handleLike = (direction) => {
    const { post } = this.props
    if (post.userVoteDirection === direction) {
      this.props.votePost(0, post.id)
    } else {
      this.props.votePost(direction, post.id)
    }
  };

  render() {
    const { classes, post } = this.props
    const { expanded } = this.state
    return (
      <CardActions disableSpacing>
        <IconButton aria-label="vote up" onClick={() => this.handleLike(1)}>
          <ArrowUpwardIcon color={post.userVoteDirection === 1 ? "secondary" : "inherit"} />
        </IconButton>
        <Votes>{post.votesCount}</Votes>
        <IconButton aria-label="vote down" onClick={() => this.handleLike(-1)}>
          <ArrowDownwardIcon color={post.userVoteDirection === -1 ? "primary" : "inherit"} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={this.handleExpandClick}
          disabled={post.commentsCount === 0}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Badge badgeContent={String(post.commentsCount)} className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })} color="primary">
            <CommentIcon className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })} />
          </Badge>
        </IconButton>
      </CardActions>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  votePost: (direction, id) => dispatch(votePost(direction, id)),
})

export default (connect(null, mapDispatchToProps)(PostActions))