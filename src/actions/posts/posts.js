import axios from 'axios';
import { alertOpen } from '../user/snackbar'


const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts";

export const createNewPost = (text , title) => async (dispatch) =>{
    try{
        const token = localStorage.getItem('token');
        await axios.post(`${baseUrl}`, {
            "text" : text,
            "title":title
        }, {
            headers:{auth:token}
        });
        dispatch(alertOpen("Post criado !!"))
        dispatch(fetchPosts())
    }catch(error){
        console.error("Erro ->",error.message);
        dispatch(alertOpen("Oops, o post não foi criado!", 'error'))
    }
};

export const fetchPosts = () => async(dispatch, getState) =>{
    const token = localStorage.getItem('token');
    const response = await axios.get(`${baseUrl}`,{
        headers:{auth:token}
    });
    dispatch(setListPosts(response.data.posts));
};


const setListPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: {
        postList: posts
    }
});

export const votePost = (direction, id) => async(dispatch)=>{
  try{
      const token = localStorage.getItem('token');
      await axios.put(`${baseUrl}/${id}/vote`, {
          "direction": direction
      }, {
          headers:{auth:token}
      });
      dispatch(fetchPosts())
  }catch(error){
      console.error("Erro ->", error.message)
  }
};