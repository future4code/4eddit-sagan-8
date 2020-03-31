import React, {Component} from 'react'
import styled from 'styled-components'

import { Button } from '@material-ui/core'

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
    render(){
        return(
            <HomePageWrapper>
                <Logo src={require("../../img/Logo4eddit.jpeg")}/>
                <div>
                    <Button
                        color={"secondary"}
                        variant="outlined"
                        style={{ margin: "15px" }}
                    >
                        Login
                    </Button>
                    <Button
                        color={"secondary"}
                        variant="contained"
                        style={{ margin: "15px" }}
                     >
                        Cadastro
                    </Button>
                </div>
            </HomePageWrapper>

        )
    }
}
export default HomePage