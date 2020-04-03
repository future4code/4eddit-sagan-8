import React, {Component} from 'react'
import styled from 'styled-components';
import GridPosts from "./GridPosts";
import {Input, Button} from "@material-ui/core";
import {connect} from "react-redux";
import { push } from 'connected-react-router';
import {routes} from "../Router";
import {createNewPost, fetchPosts} from "../../actions/posts/posts";
import Loading from "../Loading";

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
                loading: false,
        }
    }

    componentDidMount() {
        if(!this.props.isLogged){
            this.props.login()
        } else {
          this.handleLoading()
        }
    }

    handleCreatePost = () => {
        this.props.createNewPost(this.state.text, this.state.title);
        this.setState({
            title:"",
            text:""
        });
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

    handleLoading = () => {
      if(this.props.loading === 'false'){
          this.setState({loading: this.props.loading})
      }
    };

    render(){
        return(
                <PostFeedWrapper>
                    {<Loading
                        open={this.state.loading}
                        />}
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
                                multiline
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

const mapStateToProps = (state) => ({
    loading: state.loading,
    isLogged: state.user.token
});

const mapDispatchToProps = (dispatch) =>({
    createNewPost: (text, title) => dispatch(createNewPost(text, title)),
    fetchPosts: () => dispatch(fetchPosts),
    login: () => dispatch(push(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)