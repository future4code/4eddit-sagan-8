import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import UserIcon from '../../img/Icon4eddit.png';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { red } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';
import PostComments from './PostComments'
import { connect } from 'react-redux';
import { votePost } from '../../actions/posts/detail';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px auto',
    maxWidth: '80%',
    width: '400px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));

const Votes = styled.div`
  font-size: 0.8rem;
  margin: 2px;
`

// TODO O Export default deve acontecer apos conectar o componente ao redux
function PostCard(props) {// TODO Adicionar props no parametro da function

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { post } = props

  const handleLike = (direction) => {
    if (post.userVoteDirection === direction) {
      props.votePost(0, post.id)
    } else {
      props.votePost(direction, post.id)
    }
  };

  //TODO Criar uma const vinda da props.post via description 
  // Ex: const { myProp } = props

  // TODO Usar referencia deste json
  /*
  {
   "post":{
      "comments":[
         {
            "votesCount":0,
            "userVoteDirection":0,
            "id":"LGFVplqhBcJ1yzOhN3Uf",
            "username":"vinicius",
            "text":"buenos dias",
            "createdAt":1585748175082
         }
      ],
      "votesCount":0,
      "userVoteDirection":0,
      "commentsCount":1,
      "id":"AvrNAJxtsq6vrslQ0gbL",
      "username":"darvas",
      "text":"asdasdasdasdasdas",
      "createdAt":1580328992711,
      "title":"Titulo!"
   }
}
  */

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img
            src={UserIcon}
            height="auto"
          />

        }
        title={post.title}
        subheader={post.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="vote up" onClick={() => handleLike(1)}>
          <ArrowUpwardIcon color={post.userVoteDirection === 1 ? "secondary" : ""}/>
        </IconButton>
        <Votes>{post.votesCount}</Votes>
        <IconButton aria-label="vote down" onClick={() => handleLike(-1)}>
          <ArrowDownwardIcon color={post.userVoteDirection === -1 ? "primary" : ""} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <PostComments /> {/* TODO adicionar uma prop para passar o array de comentarios  */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  votePost: (direction, id) => dispatch(votePost(direction,id)),
})
export default connect(null, mapDispatchToProps)(PostCard)

/* TODO Conectar o componente à store via connect(null, fn1)(PostCard),
  sendo null o mapper de state to props (o post ja vem preenchido em props.post)
  sendo fn2 uma funcao para mapear o dispatch de votação(up, down) para o post
*/