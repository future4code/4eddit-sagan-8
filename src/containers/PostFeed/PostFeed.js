import React, {Component} from 'react'
import styled from 'styled-components';
import GridPosts from "./GridPosts";
import {TextField, Button} from "@material-ui/core";
import {connect} from "react-redux";
import { push } from 'connected-react-router';
import {routes} from "../Router";
import {createNewPost, fetchPosts} from "../../actions/posts/posts";

import {Button, Input} from "@material-ui/core";


const PostFeedWrapper = styled.div`
  padding: 20px;
  max-width: 400px;
  width: 90vw;
  margin: 6vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormNewPost = styled.form`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap:10px;
    margin-bottom:20px;
`;

class PostFeed extends Component{
    constructor(props) {
        super(props);
        this.state = {
                title: "",
                text: "",
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem("token");
        if(token === null){
            this.props.login()
        }
    }

    handleCreatePost = () => {
        this.props.createNewPost(this.state.text, this.state.title);
        this.setState({
            title:"",
            text:""
        });
        this.props.fetchPosts()
    };

    handleChangeTitle = (event) =>{
        this.setState({
                title: event.target.value
        })
    };

    handleChangeText = (event) =>{
        this.setState({
                text: event.target.value
        })
    };

    render(){
        return(
                <PostFeedWrapper>
                    <FormNewPost>
                        <Input
                            onChange={this.handleChangeTitle}
                            id="title"
                            placeholder="Título do Post"
                            variant="filled"
                            color="primary"
                            value={this.state.title}
                            required={true}
                        />
                            <Input
                                onChange={this.handleChangeText}
                                id="text"
                                placeholder="Texto do Post"
                                variant="outlined"
                                color="primary"
                                value={this.state.text}
                                required={true}
                            />
                    </FormNewPost>
                    <Button color="primary" variant="contained" type={"submit"} onClick={this.handleCreatePost} >Criar Post</Button>
                    <GridPosts />
                </PostFeedWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    createNewPost: (text, title) => dispatch(createNewPost(text, title)),
    fetchPosts: () => dispatch(fetchPosts),
    login: () => dispatch(push(routes.login)),
});

export default connect(null, mapDispatchToProps)(PostFeed)