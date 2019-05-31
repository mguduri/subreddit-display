import {
  SUBREDDIT_POSTS_FETCH_REQUEST,
  SUBREDDIT_POSTS_FETCH_FAILURE,
  SUBREDDIT_POSTS_FETCH_SUCCESS
} from "../actions/types";
import {
  subRedditPosts,
  isLoading,
  getSubRedditPosts,
  isLoadingPosts
} from "./sub-reddit-posts";

const response = [{ data: [] }];
const state = {
  subRedditPosts: response,
  isLoading: false
};

describe("subreddit posts - reducer", () => {
  it("isLoadingPosts should return false for undefined parameters", () => {
    const action = { type: undefined };
    expect(isLoading(undefined, action)).toEqual(false);
  });
  it("isLoadingPosts should return true if SUBREDDIT_POSTS_FETCH_REQUEST", () => {
    const action = { type: SUBREDDIT_POSTS_FETCH_REQUEST, payload: "" };
    expect(isLoading(false, action)).toEqual(true);
  });
  it("isLoadingPosts should return false if SUBREDDIT_POSTS_FETCH_SUCCESS", () => {
    const action = { type: SUBREDDIT_POSTS_FETCH_SUCCESS };
    expect(isLoading(true, action)).toEqual(false);
  });
  it("isLoadingPosts should return false if SUBREDDIT_POSTS_FETCH_FAILURE", () => {
    const action = { type: SUBREDDIT_POSTS_FETCH_FAILURE };
    expect(isLoading(false, action)).toEqual(false);
  });
  it("subredditposts should return res on success", () => {
    const action = { type: SUBREDDIT_POSTS_FETCH_SUCCESS, response };
    expect(subRedditPosts({}, action)).toEqual(response);
  });
  it("subredditposts should return [] on failure", () => {
    const action = { type: SUBREDDIT_POSTS_FETCH_FAILURE };
    expect(subRedditPosts({}, action)).toEqual([]);
  });
  it("subredditposts should return default state", () => {
    const action = { type: "SUBREDDIT_POSTS" };
    expect(subRedditPosts([], action)).toEqual([]);
  });
  it("subredditposts should return empty [] when response is not provided", () => {
    let action = { type: "SUBREDDIT_POSTS_FETCH_SUCCESS" };
    expect(subRedditPosts([], action)).toEqual([]);
    action = {};
    expect(subRedditPosts([], action)).toEqual([]);
  });
});

describe("subreddit posts selectore tests - reducer", () => {
  it("getSubRedditPosts should return SubRedditPosts in state", () => {
    expect(getSubRedditPosts(state)).toEqual(response);
  });
  it("isLoadingPosts should return isLoadingPosts in state", () => {
    expect(isLoadingPosts(state)).toEqual(false);
  });
});
