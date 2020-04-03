const initialState = {
    posts:[],
    currentPost: {},
    loading:""
};

export const allPosts = (state = initialState, action) => {

  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        loading: false,
        posts: action.payload.postList.sort((a, b) => b.createdAt - a.createdAt)
      }
        ;
    case "SET_POST":
      const { post } = action.payload
      const { comments } = post
      if (comments) {
        comments.sort((a, b) => b.createdAt - a.createdAt)
        post.comments = comments
      }
      return {
        ...state,
        currentPost: action.payload.post
      }

    default:
      return state;

  }
};



