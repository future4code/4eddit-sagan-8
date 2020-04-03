import React from 'react';
import styled from 'styled-components'

import {Menu, MenuItem, Button} from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Link = styled.a`
    text-decoration:none
`;

function MenuHeader() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" color="primary" size="small" style={{marginLeft:"1vw"}} {...bindTrigger(popupState)}>
                        Open Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}><Link href={"/"}>Home</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link href={"/login"}>Fazer Login</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link href={"/register"}>Cadastrar</Link></MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}

export default MenuHeader