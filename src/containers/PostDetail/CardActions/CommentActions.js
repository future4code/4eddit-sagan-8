import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { voteComment } from '../../../actions/posts/detail';

const Votes = styled.div`
  font-size: 0.8rem;
  margin: 2px;
`

class CommentActions extends React.Component {

  handleLike = (direction) => {
    const { postId, comment } = this.props
    if (comment.userVoteDirection === direction) {
      this.props.voteComment(0, comment.id, postId)
    } else {
      this.props.voteComment(direction, comment.id, postId)
    }
  };

  render() {
    const { comment } = this.props
    return (
      <CardActions disableSpacing>
        <IconButton aria-label="vote up" onClick={() => this.handleLike(1)}>
          <ArrowUpwardIcon color={comment.userVoteDirection === 1 ? "secondary" : "inherit"} />
        </IconButton>
        <Votes>{comment.votesCount}</Votes>
        <IconButton aria-label="vote down" onClick={() => this.handleLike(-1)}>
          <ArrowDownwardIcon color={comment.userVoteDirection === -1 ? "primary" : "inherit"} />
        </IconButton>
      </CardActions>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  voteComment: (direction, comment, post) => dispatch(voteComment(direction, comment, post)),
})

export default (connect(null, mapDispatchToProps)(CommentActions))