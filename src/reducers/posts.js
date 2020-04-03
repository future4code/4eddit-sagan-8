const initialState = {
    posts:[]

};

export const allPosts = (state = initialState, action) =>{

  switch (action.type) {
      case "SET_POSTS":
          return{
              ...state,
              posts: action.payload.postList
          }
          ;


      default:
          return state;

  }
};



