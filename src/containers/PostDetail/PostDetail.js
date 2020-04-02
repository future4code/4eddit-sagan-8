import React from 'react';
import PostCard from './PostCard'


class PostDetail extends React.Component {
  componentDidMount (){
    //this.props.getDetail (this.$parans.id)
  }
    render() {
    return (
     <PostCard 
     post={this.props.currentPost}
     />
    );
  }
}

PostDetail.propTypes = {

};

export default PostDetail;