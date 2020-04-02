import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../../actions/posts/createPost";


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
                <h1>Ola eu vou ser sua Grid</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchPosts: () => dispatch(fetchPosts())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GridPosts)