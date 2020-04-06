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

export const fetchPost = (id) => async (dispatch, getState) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${baseUrl}/${id}`, {
    headers: { auth: token }
  });
  dispatch(setPost(response.data.post));
};

export const goToPostDetail = postId => async (dispatch) => {
  await dispatch(fetchPost(postId))
  dispatch(push(routes.PostDetail))
};

export const addComment = (comment, postId) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.post(`${baseUrl}/${postId}/comment`, {
      "text": comment
    }, {
      headers: { auth: token }
    });
    dispatch(fetchPost(postId))
  } catch (error) {
    console.error("Erro ->", error.message)
  }
}

export const votePost = (direction, id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.put(`${baseUrl}/${id}/vote`, {
      "direction": direction
    }, {
      headers: { auth: token }
    });
    dispatch(fetchPost(id))
  } catch (error) {
    console.error("Erro ->", error.message)
  }
};

export const voteComment = (direction, comment, post) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.put(`${baseUrl}/${post}/comment/${comment}/vote`, {
      "direction": direction
    }, {
      headers: { auth: token }
    });
    dispatch(fetchPost(post))
  } catch (error) {
    console.error("Erro ->", error.message)
  }
};