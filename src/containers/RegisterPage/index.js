import React, {Component} from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";
import {registerNewUser} from "../../actions/user/register";

import { Button, TextField, Typography, Paper } from '@material-ui/core';
import { routes } from '../Router';
import { push } from 'connected-react-router';

const PaperMain = styled(Paper)`
  padding: 20px;
  max-width: 400px;
  width: 90vw;
  margin: 10vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RegisterWrapper = styled.form`
  margin-top: 12px;
  width: 80%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const createRegisterInputs = [
    {name: "username", type: "text", label: "Nome de Usuário", required: true, pattern: "[a-zA-Z0-9 ]{5,}", title: "Letras Maiúsculas, Minúsculas e Números - Mínimo 5 caracteres"},
    {name: "email", type: "text", label: "E-mail", required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", title: "Insira um email válido"},
    {name: "password", type: "text", label: "Senha", required: true, pattern: "[a-zA-Z0-9 ]{5,}", title: "Letras Maiúsculas, Minúsculas e Números - Mínimo 5 caracteres"},
];

class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:{
                username:"",
                email:"",
                password:""
            }
        }
    }

    componentDidMount() {
      if (this.props.isLogged) {
        this.props.goTo(routes.postFeed)
      }
    }

    handleOnSubmit = event =>{
        event.preventDefault();
        this.props.registerNewUser(this.state.user)
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    render(){
        return(
            <PaperMain>
                <Typography variant="h5" style={{textAlign: "center"}}>Criar nova conta</Typography>
                <RegisterWrapper onSubmit={this.handleOnSubmit}>
                    {createRegisterInputs.map(input =>(
                            <TextField id="outlined-basic" label={input.label} variant="outlined"
                            key={input.name}
                            id={input.name}
                            name={input.name}
                            type={input.type}
                            value={this.state.user[input.name] || ""}
                            required
                            onChange={this.handleInputChange}
                            inputProps={{
                               pattern: input.pattern,
                               title: input.title
                            }}

                            />
                    ))}
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: "15px" }}
                        type="submit"
                    >
                        Cadastrar
                    </Button>

                </RegisterWrapper>
            </PaperMain>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerNewUser: (user) => dispatch(registerNewUser((user))),
    goTo: (url) => dispatch(push(url)),
});

const mapStateToProps = (state) => ({
  isLogged: state.user.token,
})

export default  connect(mapStateToProps, mapDispatchToProps)(RegisterPage)