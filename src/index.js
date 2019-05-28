import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import RedditDataScraping from "./reddit-data-scraping";

ReactDOM.render(<RedditDataScraping />, document.getElementById("index"));
