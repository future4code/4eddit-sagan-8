import React from 'react';
import PostCard from './PostCard'


class PostDetail extends React.Component {

  // TODO Criar um constructor para salvar o state do input de comentario

  componentDidMount (){
    // TODO Validar se possui id do post no parametro ou na store
    // TODO Chamar o dispatch para popular os detalhes do post escolhido
    //this.props.getDetail (this.$parans.id)
  }

  render() {
    return (
    // TODO Usar um styled/mui para conter o card e o comentario
     <PostCard 
     post={this.props.currentPost}
     />
     // TODO Adicionar o componente de comentario (input + button)
    );
  }
}

PostDetail.propTypes = {
// TODO Talvez seja desnecessario este propType,
};

export default PostDetail;
/* TODO Conectar o componente à store via connect(fn1, fn2)(PostDetail),
  sendo fn1 uma funcao para mapear o post atual para a props que quiser ex currentPost: state.posts.post
  sendo fn2 uma funcao para mapear o dispatch de criacao de comentario e de detalhes do post
*/