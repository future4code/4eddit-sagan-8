import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from "react-redux";
import {fetchPosts} from "../../actions/posts/posts";
import CardHeader from "@material-ui/core/CardHeader";
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {goToPostDetail} from '../../actions/posts/detail'
import {red} from "@material-ui/core/colors";
import UserIcon from "../../img/Icon4eddit.png";
import PostActions from "../PostFeed/CardActions";
import {withStyles} from "@material-ui/core/styles";

const CardList = styled.ul`
  margin: 0;
  padding: 0;
`
const CardWrapper = styled.li`
  list-style: none;    
`;

const Title = styled.div`
    margin-top:30px;
`;

const useStyles = ((theme) => ({
    root: {
        margin: '20px auto',
        maxWidth: '90vw',
        width: '410px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    avatar: {
        backgroundColor: red[500],
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

class GridPosts extends Component{

    componentDidMount() {
        this.props.fetchPosts()
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Title>
                    <Typography variant="h4" style={{textAlign: "center"}}>Posts Populares</Typography>
                </Title>
                <CardList>
                {this.props.posts.map(post => {
                    return(
                        <CardWrapper key={post.id}>
                            <Card className={classes.root} >
                              <div style={{cursor: 'pointer'}} onClick={() => this.props.goToDetail(post.id)}>
                                <CardHeader
                                    avatar={<img src={UserIcon} height="auto" alt={post.username} />}
                                    title={post.title}
                                    subheader={post.username}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {post.text}
                                    </Typography>
                                </CardContent>
                              </div>
                              <PostActions
                                  classes={classes}
                                  post={post}
                              />
                            </Card>
                        </CardWrapper>
                    )
                })}
                </CardList>
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
        goToDetail: (id) => dispatch(goToPostDetail(id))
    }
};

export default withStyles(useStyles)(connect(mapStateToProps,mapDispatchToProps)(GridPosts))