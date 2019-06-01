import React, { Component } from "react";
import PropTypes from "prop-types";
import Posts from "./posts";
import SpinnerComponent from "../common/spinner";

export default class Search extends Component {
  static propTypes = {
    fetchSubRedditPostsRequest: PropTypes.func,
    posts: PropTypes.array,
    isLoadingPosts: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
    this.fetchposts = this.fetchposts.bind(this);
  }

  fetchposts = event => {
    if (event.key === "Enter") {
      const searchVal = event && event.target && event.target.value || "";
      if (searchVal !== "") {
        const { fetchSubRedditPostsRequest } = this.props;
        fetchSubRedditPostsRequest && fetchSubRedditPostsRequest(searchVal);
      }
    }
  };

  renderPosts = () => {
    const { posts, isLoadingPosts } = this.props;
    if (isLoadingPosts) {
      return (
        <div className="center-align">
          <SpinnerComponent />
        </div>
      );
    } else if (posts && posts.length > 0) {
      return <Posts posts={posts} />;
    } else if (posts && posts.length == 0) {
      return (
        <span className="empty-results text-secondary">No Results Found</span>
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="primary-container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="input-group">
                <input
                  id="subreddit"
                  type="text"
                  className="form-control input-control-no-border input-control-add-border"
                  name="subreddit"
                  placeholder="Enter subreddit here"
                  onKeyPress={this.fetchposts}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">{this.renderPosts()}</div>
          </div>
        </div>
      </div>
    );
  }
}
