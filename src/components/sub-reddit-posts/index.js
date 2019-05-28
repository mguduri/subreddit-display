import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSubRedditPostsRequest } from "../../actions/creators";
import { getSubRedditPosts, isLoadingPosts } from "../../reducers";
import SubRedditPosts from "./sub-reddit-posts";
import { throws } from "assert";

export class SubRedditPostsContainer extends Component {
  static propTypes = {
    fetchSubRedditPostsRequest: PropTypes.func,
    posts: PropTypes.array,
    isLoadingPosts: PropTypes.bool
  };

  render() {
    return (
      <SubRedditPosts
        fetchSubRedditPostsRequest={this.props.fetchSubRedditPostsRequest}
        posts={this.props.posts}
        isLoadingPosts={this.props.isLoadingPosts}
      />
    );
  }
}

export default connect(
  state => ({
    posts: getSubRedditPosts(state),
    isLoadingPosts: isLoadingPosts(state)
  }),
  {
    fetchSubRedditPostsRequest
  }
)(SubRedditPostsContainer);
