import {
  SUBREDDIT_POSTS_FETCH_REQUEST,
  SUBREDDIT_POSTS_FETCH_FAILURE,
  SUBREDDIT_POSTS_FETCH_SUCCESS
} from "./types";

/**
 * Action creator to get list of subreddit posts
 * @return {{type: string}} - Returns object for dispatch
 */
export const fetchSubRedditPostsRequest = subreddit => ({
  type: SUBREDDIT_POSTS_FETCH_REQUEST,
  subreddit
});

/**
 * Action creator to get list of subreddit posts success
 * @return {{type: string, response: array}} - Returns object for dispatch
 */
export const fetchSubRedditPostsSuccess = response => ({
  type: SUBREDDIT_POSTS_FETCH_SUCCESS,
  response
});

/**
 * Action creator to get list of subreddit posts failure
 * @return {{type: string, error: object}} - Returns object for dispatch
 */
export const fetchSubRedditPostsFailure = error => ({
  type: SUBREDDIT_POSTS_FETCH_FAILURE,
  error
});
