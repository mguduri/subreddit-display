import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import SubredditDisplay from "./subreddit-display";

ReactDOM.render(<SubredditDisplay />, document.getElementById("index"));
