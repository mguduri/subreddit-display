import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./post";
import ModalPopup from "../common/modal";
import Pagination from "../common/pagination";

export default class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.closePost = this.closePost.bind(this);
    this.state = {
      show: false
    };
    this.title = "";
    this.body = "";
  }

  closePost() {
    this.setState({ show: false });
  }

  openPost = (title, body) => {
    this.title = title;
    this.body = body;
    this.setState({ show: true });
  };

  displayPosts = ({ data }) => {
    return (
        <Post key={data.id} openPost = {this.openPost} data={data}/>
    );
  };

  renderPosts = currentPosts => {
    return (
      <ul className="list-group">
        {currentPosts.map(post => this.displayPosts(post))}
      </ul>
    );
  };

  render() {
    const { posts } = this.props;
    //TODO Make this configurable;
    const itemsPerPage = 10;
    return (
      <div className="posts-container">
        <ModalPopup
          title={this.title}
          body={this.body}
          showModal={this.state.show}
          hideModal={this.closePost}
        />
        <Pagination
          data={posts}
          renderPosts={this.renderPosts}
          itemsPerPage={itemsPerPage}
        />
      </div>
    );
  }
}
