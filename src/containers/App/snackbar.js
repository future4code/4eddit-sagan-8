import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { closeAlert } from '../../actions/user/actionCreators'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function CustomizedSnackbars(props) {
  
  const handleClose = (event, reason) => {
   props.close()
  };

  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.severity}> {props.message} </Alert>
    </Snackbar>
  );
}

const mapStateToProps = (state) => ({
  open: state.user.snackbar.open,
  severity: state.user.snackbar.severity,
  message: state.user.snackbar.message,
})

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeAlert())
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSnackbars)