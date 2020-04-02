import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuHeader() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" color="primary" size="small" style={{marginLeft:"1vw"}} {...bindTrigger(popupState)}>
                        Open Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Fazer Login</MenuItem>
                        <MenuItem onClick={popupState.close}>Cadastrar</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}