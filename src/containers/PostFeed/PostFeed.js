import React, {Component} from 'react'
import styled from 'styled-components';
import GridPosts from "./GridPosts";

import {connect} from "react-redux";
import { push } from 'connected-react-router';
import {routes} from "../Router";
import {createNewPost} from "../../actions/posts/posts";

import {TextField, Button} from "@material-ui/core";

const PostFeedWrapper = styled.div`
  padding: 20px;
  max-width: 400px;
  width: 90vw;
  margin: 6vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormNewPost = styled.form`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap:10px;
    margin-bottom:20px;
`

class PostFeed extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: "",
                text: "",
            }
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem("token");
        if(token === null){
            this.props.login()
        }
    }

    handleClick = () => {
        this.props.createNewPost(this.state.post)
    };

    handleChangeTitle = (event) =>{
        this.setState({
            post:{
                title: event.target.value
            }
        })
    };

    handleChangeText = (event) =>{
        this.setState({
            post:{
                text: event.target.value
            }
        })
    };

    render(){
        return(
            <div>
                <PostFeedWrapper>
                    <FormNewPost>
                    <TextField
                        onChange={this.handleChangeTitle}
                        id="title"
                        label="Título do Post"
                        variant="outlined"
                        color="primary"
                    />
                        <TextField
                            onChange={this.handleChangeText}
                            id="text"
                            label="Texto do Post"
                            variant="outlined"
                            color="primary"
                        />
                    </FormNewPost>
                    <Button color="primary" variant="contained" type={"submit"} onClick={this.handleClick} >Criar Post</Button>
                    <GridPosts />

                </PostFeedWrapper>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    createNewPost: (post) => dispatch(createNewPost(post)),
    login: () => dispatch(push(routes.login)),
});

export default connect(null, mapDispatchToProps)(PostFeed)