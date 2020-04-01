import React from 'react'
import styled from 'styled-components'
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
`
const Logo = styled.img`
    height:4vh;
    width:6vw;
    margin-top:15px;
    border-radius:10%;
`

class Header extends React.Component{

    render(){
        return(
            <HeaderWrapper>
                <Logo src={require("../../img/Logo4eddit.jpeg")} />
                <TextField
                    id="input-with-icon-textfield"
                    label="Buscar"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <MenuHeader />
                <div />
            </HeaderWrapper>
        )
    }
}

export default Header