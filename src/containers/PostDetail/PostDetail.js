import React from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { push } from 'connected-react-router';
import { routes } from '../Router'



class PostDetail extends React.Component {

  // TODO Criar um constructor para salvar o state do input de comentario

  componentDidMount (){
    console.log('propPost', this.props.post)
    if (!this.props.post || !this.props.post.id){
      console.log('ok')
      this.props.goToFeed()
    }
    // TODO Validar se possui id do post no parametro ou na store
    // TODO Chamar o dispatch para popular os detalhes do post escolhido
    //this.props.getDetail (this.$parans.id)
  }

  render() {
    return (
    // TODO Usar um styled/mui para conter o card e o comentario
     <PostCard 
     post={this.props.post}
     />
     // TODO Adicionar o componente de comentario (input + button)
    );
  }
}

PostDetail.propTypes = {
// TODO Talvez seja desnecessario este propType,
};

const mapStateToProps = (state) => ({
  post: state.allPosts.currentPost,
})

const mapDispatchToProps = (dispatch) => ({
  goToFeed: () => dispatch(push(routes.postFeed))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)