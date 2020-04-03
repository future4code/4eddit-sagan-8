import React from 'react';
import styled from 'styled-components'
import { Menu, MenuItem, Button } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { doLogout } from '../../actions/user/login';

const Link = styled.a`
    text-decoration:none;
`;

// Mudanças aqui!
function MenuHeader(props) {
  const menuClick = (url, popupState) => {
    popupState.close()
    props.goTo(url)
  }

  const logout = (popupState) => {
    popupState.close()
    props.logout()
  }

  const { isLogged } = props

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" size="small" style={{ marginLeft: "1vw" }} {...bindTrigger(popupState)}>
            Open Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => menuClick(routes.root, popupState)}>Home</MenuItem>
            {!isLogged && <MenuItem onClick={() => menuClick(routes.login, popupState)}>Fazer Login</MenuItem>}
            {!isLogged && <MenuItem onClick={() => menuClick(routes.register, popupState)}>Cadastrar</MenuItem>}
            {isLogged && <MenuItem onClick={() => logout(popupState)}>Logout</MenuItem>}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

const mapDispatchToProps = dispatch => ({
  goTo: (url) => dispatch(push(url)),
  logout: () => dispatch(doLogout())
})

const mapStateToProps = state => ({
  isLogged: state.user.token
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader)