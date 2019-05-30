import React from "react";
import { getTotalDays } from "../../util/date";

const Post = ({ title, author, created }) => {
  const days = getTotalDays(created) || 0;

  function showPostTitle() {
    return (
      <div>
        <h6>{title}</h6>
        <span className="text-secondary sub-header">
          Posted by {author} {days > 0 ? `${days} days ago` : "Today"}
        </span>
      </div>
    );
  }

  return showPostTitle();
};

export default Post;
