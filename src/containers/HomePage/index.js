import React, {Component} from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { push } from 'connected-react-router';

const HomePageWrapper = styled.div`
  padding: 20px;
  max-width: 400px;
  width: 90vw;
  margin: 10vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`  
  max-width: 500px;
  width: 80vw;
  border-radius:10%;
  margin-bottom:50px;
`


class HomePage extends Component{

    handleClickLogin = () =>{
        this.props.login()
    };

    handleClickRegister = () =>{
        this.props.register()
    };

    render(){
        return(
            <HomePageWrapper>
                <Logo src={require("../../img/Logo4eddit.jpeg")}/>
                <div>
                    <Button
                        color={"secondary"}
                        variant="outlined"
                        style={{ margin: "15px" }}
                        onClick={this.handleClickLogin}
                    >
                        Login
                    </Button>
                    <Button
                        color={"secondary"}
                        variant="contained"
                        style={{ margin: "15px" }}
                        onClick={this.handleClickRegister}
                     >
                        Cadastro
                    </Button>
                </div>
            </HomePageWrapper>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(push("/login")),
    register: () => dispatch(push("/register"))
});

export default connect(null, mapDispatchToProps)(HomePage)