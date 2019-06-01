import React, { Component } from "react";
import PropTypes from "prop-types";
import { getTotalDays } from "../../util/date";

export default class Posts extends Component {
  static propTypes = {
    data: PropTypes.object,
    openPost: PropTypes.func
  };

  getPostBody = currentPost => {
    let { post_hint = '', url = '', selftext = '' } = currentPost;

    if (post_hint && post_hint.indexOf("video") > 0) {
      post_hint = "video";
      const {
        media: {
          reddit_video: { fallback_url = "" } = {},
          oembed: { thumbnail_url = "" } = {}
        }
      } = currentPost;
      url = fallback_url || thumbnail_url;
    }

    switch (post_hint) {
      case "self":
        return selftext;
      case "image":
        return <img style={{ width: "100%" }} src={url} />;
      case "video":
        return <embed style={{ width: "100%", height: "100%" }} src={url} />;
      case "link":
        return (
          <ul>
            <li>
              <a href={url} target="_blank">
                {url}
              </a>
            </li>
          </ul>
        );
      default:{
        return selftext || "";

      }
    }
  };

  handleCurrentPost = currentPost => {
    const title = currentPost.title || "",
      body = this.getPostBody(currentPost);
      this.props.openPost(title, body);
  };

  render() {
    const { author, title, id, created } = this.props.data;
    const days = getTotalDays(created);

    return (
      <li
        className="list-group-item bg-light"
        onClick={() => this.handleCurrentPost(this.props.data)}
        key={id}
      >
        <div>
          <h6>{title}</h6>
          <span className="text-secondary sub-header">
            Posted by {author} {days}
          </span>
        </div>
      </li>
    );
  }
}
