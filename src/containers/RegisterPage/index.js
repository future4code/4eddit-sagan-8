import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"

import { Button, TextField, Typography, Paper } from '@material-ui/core';

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
    {name: "email", type: "text", label: "E-mail", required: true, pattern: "[a-zA-Z0-9 ]{5,}", title: "Letras Maiúsculas, Minúsculas e Números - Mínimo 5 caracteres"},
    {name: "password", type: "text", label: "Senha", required: true, pattern: "[a-zA-Z0-9 ]{5,}", title: "Letras Maiúsculas, Minúsculas e Números - Mínimo 5 caracteres"},
]

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

    handleOnSubmit = event =>{
        event.preventDefault();
        this.props.postFeed();
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
    postFeed: () => dispatch(push(routes.postFeed))

})


export default  connect(null, mapDispatchToProps)(RegisterPage)