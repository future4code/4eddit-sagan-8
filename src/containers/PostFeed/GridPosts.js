import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from "react-redux";
import {fetchPosts} from "../../actions/posts/createPost";

import CardHeader from "@material-ui/core/CardHeader";
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Title = styled(Typography)`
    padding:30px 30px;
`;
const CardWrapper = styled.div`
    display:grid;    
    grid-template-rows:1fr 2rem;
    text-align:center;  
    
`;
const VotesWrapper = styled.div`
    display:flex;    
`;
const CommentWrapper = styled.div`
    margin-left:270px;
`;
const UserWrapper = styled.div`
    display:flex;
`;

class GridPosts extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                <Title variant="h4" style={{textAlign: "center"}}>Posts Populares</Title>
                {this.props.posts.map(post => {
                    return(
                        <CardWrapper key={post.id}>
                            <Card>
                                 <UserWrapper>
                                     <AccountCircleIcon />
                                     <CardHeader title={post.username}/>
                                 </UserWrapper>
                                 <hr />
                                 <Typography variant="h6">{post.title}</Typography>
                                 <CardContent children={post.text} />
                                 <VotesWrapper>
                                     <ArrowUpwardIcon />
                                     <span>{post.votesCount}</span>
                                     <ArrowDownwardIcon  />
                                     <CommentWrapper>
                                     <CommentIcon />
                                     <span>{post.commentsCount} </span>
                                     </CommentWrapper>
                                 </VotesWrapper>
                            </Card>
                        </CardWrapper>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.allPosts.posts
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchPosts: () => dispatch(fetchPosts())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GridPosts)