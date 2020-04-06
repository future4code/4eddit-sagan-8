import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import CommentActions from './CardActions/CommentActions'

import UserIcon from '../../img/Icon4edditInverted.png';

const CommentList = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`
const CommentItem = styled.li`
  margin: 10px 0;
  list-style: none;
  font-size: 0.9rem;
  .header {
    padding: 12px;
  }
  .content {
    padding: 10px;
  }
  .actions {
    padding: 5px;
  }
`

class PostComments extends React.Component {

  // "comments":[
  //   {
  //      "votesCount":0,
  //      "userVoteDirection":0,
  //      "id":"LGFVplqhBcJ1yzOhN3Uf",
  //      "username":"vinicius",
  //      "text":"buenos dias",
  //      "createdAt":1585748175082
  //   }

  render() {
    const { comments, postId, classes } = this.props
    return (
      <CommentList>
        {comments.map(comment => {
          return (
            <CommentItem key={comment.id}>
              <Card>
                <CardHeader
                  className="header"
                  avatar={<img src={UserIcon} height="35px" alt={comment.username} />}
                  title={comment.username}
                />
                <CardContent className="content">
                  <Typography variant="body2" color="textSecondary" component="p">
                    {comment.text}
                  </Typography>
                </CardContent>
                <CommentActions
                  className="actions"
                  classes={classes}
                  comment={comment}
                  postId={postId}
                />
              </Card>
            </CommentItem>
          )
        })}
      </CommentList>
    );
  }
}

PostComments.propTypes = {

};

export default PostComments;