import React from 'react';
import styled from 'styled-components';
import MenuHeader from "./Menu";

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

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

const Search = styled.div `
display:flex;
align-items:center;
justify-content:space-between;
`;

const Logo = styled.img`
    height:8vh;
    max-height:60px;
    height:4vh;
    width:4vw;
    margin-top:10px;
`;

class Header extends React.Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo src={require("../../img/Icon4eddit.png")} />
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

export default Header