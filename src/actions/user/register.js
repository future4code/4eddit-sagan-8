import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser } from './actionCreators'

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit/signup";

export const registerNewUser = user => async(dispatch) =>{
    try{
        const newUser = {
            username: user.username,
            email: user.email,
            password: user.password
        }

        const response = await axios.post(`${baseUrl}`, newUser);
        alert("Usuário criado com sucesso!!");
        dispatch(setUser(response.data)); 
        // TODO Aqui tambem é necessário setar o token no localstorage, por isso é bom mover a logica para setUser ou reducer
        dispatch(push("/postfeed"));

    }catch (error) {
        alert("Ops, algo deu errado!");
        console.error("Erro ->", error.message);

    }
};