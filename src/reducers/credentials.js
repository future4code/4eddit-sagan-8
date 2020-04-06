const initialState = {
  user: null,
  token: null,
  snackbar: {
    open: false,
    severity: 'info',
    message: '',
  }
}

const credentials = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { user, token } = action.payload
      return { ...state, user, token }
    case 'OPEN_SNACKBAR':
      return { ...state, snackbar: { open: true, severity: action.payload.severity, message: action.payload.message } }
    case 'CLOSE_SNACKBAR':
      return { ...state, snackbar: { open: false, severity: 'info', message: '', } }
    default:
      return state
  }
}

export default credentials