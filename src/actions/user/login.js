import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser } from './actionCreators'
import { alertOpen } from './snackbar'

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit";

//TODO Se tiver tempo usar componente de snackbar do mui
export const doLogin = user => async(dispatch) =>{
    try{
        const response = await axios.post(`${baseUrl}/login`, user)
        dispatch(alertOpen("Bem-vindo!"))
        dispatch(setUser(response.data));
        const token = response.data.token;
        window.localStorage.setItem("token", token)
        dispatch(push("/postfeed"));

    }catch (error) {
      dispatch(alertOpen("Ops, algo deu errado!", 'error'))
        console.error("Erro ->", error.message)

    }
};