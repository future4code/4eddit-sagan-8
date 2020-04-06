import React from 'react';
import styled from 'styled-components';
import MenuHeader from "./Menu";

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';

const HeaderWrapper = styled.header`
    position:fixed;
    top:0;
    background:#f5f5f5;
    height:8vh;
    width:100vw; 
    display:flex;
    justify-content: space-between; 
    align-content: center;
    padding: 0 2vw;  
`;

const Search = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

const Logo = styled.img`
    height:8vh;
    cursor:pointer;
`;

// Mudanças aqui!
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo src={require("../../img/Icon4eddit.png")} onClick={this.props.goToHome} />
        <Search>
          <TextField
            id="input-with-icon-textfield"
            label="Buscar"
            variant="filled"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <MenuHeader />
        </Search>
      </HeaderWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push(routes.postFeed))
})

export default connect(null, mapDispatchToProps)(Header)