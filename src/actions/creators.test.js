import {
  SUBREDDIT_POSTS_FETCH_REQUEST,
  SUBREDDIT_POSTS_FETCH_FAILURE,
  SUBREDDIT_POSTS_FETCH_SUCCESS
} from "./types";

import * as actions from "./creators";

describe("subreddit action creators", () => {
  it("should return action obj for  fetchSubRedditPostsRequest ", () => {
    const expectedAction = {
      type: SUBREDDIT_POSTS_FETCH_REQUEST,
      subreddit: ""
    };
    expect(actions.fetchSubRedditPostsRequest("")).toEqual(expectedAction);
  });

  it("should return action obj for fetchSubRedditPostsSuccess ", () => {
    const response = { children: [] },
      expectedAction = { type: SUBREDDIT_POSTS_FETCH_SUCCESS, response };
    expect(actions.fetchSubRedditPostsSuccess(response)).toEqual(
      expectedAction
    );
  });

  it("should return action obj for fetchSubRedditPostsFailure", () => {
    const error = {},
      expectedAction = { type: SUBREDDIT_POSTS_FETCH_FAILURE, error };
    expect(actions.fetchSubRedditPostsFailure(error)).toEqual(expectedAction);
  });
});
