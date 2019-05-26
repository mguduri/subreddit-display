
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class SubRedditPosts extends Component {
    static propTypes = {
        fetchSubRedditPostsRequest: PropTypes.func,
        posts: PropTypes.array,
        isLoadingPosts: PropTypes.bool
    }

    componentDidMount() {
        const { fetchSubRedditPostsRequest } = this.props;
        fetchSubRedditPostsRequest('reactjs');
    }

    render(){
        return (<div>Hello World!</div>);
    }
}
