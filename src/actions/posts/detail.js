import axios from 'axios';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router'

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts";

const setPost = (post) => ({
  type: 'SET_POST',
  payload: {
      post,
  }
});

export const fetchPost = (id) => async(dispatch, getState) =>{
  const token = localStorage.getItem('token');
  const response = await axios.get(`${baseUrl}/${id}`,{
      headers:{auth:token}
  });
  dispatch(setPost(response.data.post));
};


export const goToPostDetail = postId => async (dispatch) =>{
  dispatch (fetchPost(postId))
  dispatch (push(routes.PostDetail))
};
