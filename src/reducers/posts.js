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
        posts: action.payload.postList,
        loading: false
      }
        ;
    case "SET_POST":
      return {
        ...state,
        currentPost: action.payload.post
      }

    default:
      return state;

  }
};



