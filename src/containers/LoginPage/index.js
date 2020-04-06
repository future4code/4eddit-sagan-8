import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, Paper } from "@material-ui/core";
import styled from "styled-components";
import { routes } from "../Router"
import { doLogin } from "../../actions/user/login"

const LoginWrapper = styled.form`
  margin-top: 12px;
  width: 80%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const PaperMain = styled(Paper)`
  padding: 20px;
  max-width: 400px;
  width: 90vw;
  margin: 10vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  
  componentDidMount() {
    if (this.props.isLogged) {
      this.props.goTo(routes.postFeed)
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault()
    this.props.doLogin(this.state)
  };

  render() {
    const { email, password } = this.state;

    return (
      <PaperMain>
        <Typography variant="h5" style={{textAlign: "center"}}>Já é membro do 4eddit? </Typography>
        <LoginWrapper onSubmit={this.formSubmit}>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            required
            inputProps={{
              title: "Informe um e-mail válido."
            }}
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Senha"
            required
            inputProps={{
              pattern: ".{6,}",
              title: "A senha deve ter pelo menos 6 dígitos."
            }}
            value={password}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "15px" }}
            type="submit"
          >
            Login
          </Button>
        </LoginWrapper>
      </PaperMain>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.user.token,

})

const mapDispatchToProps = (dispatch) => ({
  doLogin: (form) => dispatch(doLogin(form)),
  goTo: (url) => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)