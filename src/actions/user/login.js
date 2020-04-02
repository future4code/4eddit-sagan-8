import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser } from './actionCreators'

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit";

//TODO Se tiver tempo usar componente de snackbar do mui
export const doLogin = user => async(dispatch) =>{
    try{
        const response = await axios.post(`${baseUrl}/login`, user)
        alert("Bem-vindo!")
        dispatch(setUser(response.data));
        const token = response.data.token;
        window.localStorage.setItem("token", token)

        dispatch(push("/postfeed"));
        //TODO Mover logica do token no localstorage para setUser ou entao para o reducer

    }catch (error) {
        alert("Ops, algo deu errado!")
        console.error("Erro ->", error.message)

    }
};