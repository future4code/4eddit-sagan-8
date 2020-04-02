export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  }
}

export const openAlert = (message, severity = 'success') => {
  return {
    type: 'OPEN_SNACKBAR',
    payload: { severity, message },
  }
}

export const closeAlert = () => {
  return {
    type: 'CLOSE_SNACKBAR',
  }
}