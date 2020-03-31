const initialState = {
  user: null,
  token: null,
}

const credentials = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { user, token } = action.payload
      return { ...state, user, token }
    default:
      return state
  }
}

export default credentials