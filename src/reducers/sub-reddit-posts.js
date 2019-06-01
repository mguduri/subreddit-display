import { combineReducers } from "redux";
import {
  SUBREDDIT_POSTS_FETCH_REQUEST,
  SUBREDDIT_POSTS_FETCH_FAILURE,
  SUBREDDIT_POSTS_FETCH_SUCCESS
} from "../actions/types";

export function subRedditPosts(state = null, { type, response = [] } = {}) {
  switch (type) {
    case SUBREDDIT_POSTS_FETCH_SUCCESS:
      return response;
    case SUBREDDIT_POSTS_FETCH_FAILURE:
      return [];
    default:
      return state;
  }
}

export function isLoading(state = false, { type }) {
  switch (type) {
    case SUBREDDIT_POSTS_FETCH_REQUEST:
      return true;
    case SUBREDDIT_POSTS_FETCH_SUCCESS:
    case SUBREDDIT_POSTS_FETCH_FAILURE:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  subRedditPosts,
  isLoading
});

/*****************************
// _________SELCECTORS__________
//*****************************/

export const getSubRedditPosts = state => state.subRedditPosts;
export const isLoadingPosts = state => state.isLoading || false;
