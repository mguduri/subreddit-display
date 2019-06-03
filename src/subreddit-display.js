import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
import SubRedditPosts from "./components/sub-reddit-posts";
import appConfig from "../config.json";

export default class SubredditDisplay extends Component {
  constructor(props) {
    super(props);
    const initialState = { appConfig };
    this.store = configureStore(initialState);
  }

  render() {
    return (
      <div className="reddit-data-scraper">
        <Provider store={this.store}>
          <SubRedditPosts />
        </Provider>
      </div>
    );
  }
}
