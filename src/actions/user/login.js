import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser } from './actionCreators'

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit";

export const doLogin = user => async(dispatch) =>{
    try{
        const response = await axios.post(`${baseUrl}/login`, user)
        alert("Bem-vindo!")
        dispatch(setUser(response.data));
        dispatch(push("/postfeed"));
        const token = response.data.token;
        window.localStorage.setItem("token", token)
    }catch (error) {
        alert("Ops, algo deu errado!")
        console.error("Erro ->", error.message)

    }
};