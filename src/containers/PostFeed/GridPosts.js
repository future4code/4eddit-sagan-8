import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from "react-redux";
import {fetchPosts, votePost} from "../../actions/posts/posts";
import CardHeader from "@material-ui/core/CardHeader";
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {goToPostDetail} from '../../actions/posts/detail'

const Title = styled(Typography)`
    padding:30px 30px;
`;
const CardWrapper = styled.div`
    display:grid;    
    grid-template-rows:1fr 2rem;
    text-align:center;  
    cursor: pointer;
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

    handleLike = (direction,id) => {
        const result = this.props.posts.find(dir =>
            dir.id === id
        );
        if(result.userVoteDirection === 1){
            this.props.votePost(0,id)
        }else{
            this.props.votePost(direction,id)
        }
    };

    handleDislike = (direction,id)=>{
        const result = this.props.posts.find(dir =>
            dir.id === id
        );
      if(result.userVoteDirection === -1){
          this.props.votePost(0,id)
      }else{
          this.props.votePost(direction,id)
      }
    };

    render(){
        return(
            <div>
                <Title variant="h4" style={{textAlign: "center"}}>Posts Populares</Title>
                {this.props.posts.map(post => {
                    return(
                        <CardWrapper key={post.id} onClick={() => this.props.goToDetail(post.id)}>
                            <Card>
                                 <UserWrapper>
                                     <AccountCircleIcon />
                                     <CardHeader title={post.username}/>
                                 </UserWrapper>
                                 <hr />
                                 <Typography variant="h6">{post.title}</Typography>
                                 <CardContent children={post.text} />
                                 <VotesWrapper>
                                     <ArrowUpwardIcon color={post.userVoteDirection === 1 ? "secondary" : "inherit"}
                                         onClick={() => this.handleLike(1,post.id)} />
                                     <span>{post.votesCount}</span>
                                     <ArrowDownwardIcon color={post.userVoteDirection === -1 ? "primary" : "inherit"}
                                         onClick={() => this.handleDislike(-1,post.id)} />
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
        fetchPosts: () => dispatch(fetchPosts()),
        votePost: (direction, id) => dispatch(votePost(direction,id)),
        goToDetail: (id) => dispatch(goToPostDetail(id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GridPosts)