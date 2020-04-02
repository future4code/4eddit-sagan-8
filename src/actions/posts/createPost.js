import axios from 'axios';

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts";

export const createNewPost = post => async (dispatch) =>{
    try{
        const newPost = {
                text: post.text,
                title: post.title
        };

        const token = localStorage.getItem('token');
        await axios.post(`${baseUrl}`, newPost, {
            headers:{auth:token}
        });
        alert("Post Criado com Sucesso !")
    }catch(error){
        console.error("Erro ->",error.message);
        alert("Ops, o post não foi criado!!")
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