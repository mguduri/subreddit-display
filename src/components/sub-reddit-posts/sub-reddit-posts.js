import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SubRedditPosts extends Component {
  static propTypes = {
    fetchSubRedditPostsRequest: PropTypes.func,
    posts: PropTypes.array,
    isLoadingPosts: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.fetchposts = this.fetchposts.bind(this);
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value || "" });
  };

  fetchposts = () => {
    const { searchValue } = this.state;
    if (searchValue !== "") {
      const { fetchSubRedditPostsRequest } = this.props;
      fetchSubRedditPostsRequest(searchValue);
    }
  };

  render() {
    return (
      <div className="primary-container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="subreddit"
                  aria-label="subreddit"
                  aria-describedby="basic-addon2"
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.fetchposts}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
