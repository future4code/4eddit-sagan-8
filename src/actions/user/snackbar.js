import { openAlert } from './actionCreators'

export const alertOpen = (message, severity) => dispatch => {
dispatch(openAlert(message, severity))
}