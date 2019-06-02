import { call, put } from "redux-saga/effects";
import {
  fetchSubRedditPostsSuccess,
  fetchSubRedditPostsFailure
} from "../actions/creators";
import getSubRedditPosts, { transformResponse } from "./get-subreddit-posts";
import serviceLocator from "./service-locator.js";
import RedditService from "../services/reddit-service";
import {
  SUBREDDIT_POSTS_FETCH_FAILURE,
  SUBREDDIT_POSTS_FETCH_SUCCESS
} from "../actions/types";

describe("subreddits - get subreddits Saga - sagas/get-subreddit-posts.js", () => {
  const redditService = new RedditService("");
  const subreddit = "reactjs";
  const response = { data: { children: [{ data: { id: 1 } }] } },
    transformedRes = [{ data: { id: 1 } }],
    error = { code: 404, status: "failed" };

  it("It should handle subreddit posts success", () => {
    const gen = new getSubRedditPosts({ subreddit: "reactjs" });
    expect(gen.next().value).toEqual(call(serviceLocator));
    expect(gen.next(redditService).value).toEqual(
      call([redditService, redditService.getSubReddits], subreddit)
    );
    expect(gen.next(response).value).toEqual(
      put(fetchSubRedditPostsSuccess(transformedRes))
    );
    expect(gen.next().done).toBe(true);
  });

  it("It should handle subreddit posts failure", () => {
    const gen = new getSubRedditPosts({ test });
    expect(gen.next().value).toEqual(call(serviceLocator));
    expect(gen.next(redditService).value).toEqual(
      call([redditService, redditService.getSubReddits], "")
    );
    expect(gen.throw(error).value).toEqual(
      put(fetchSubRedditPostsFailure(error))
    );
    expect(gen.next().done).toBe(true);
  });

  it("It should transform response as expected", () => {
    const resp = transformResponse(response);
    expect(resp).toEqual(transformedRes);
  });

  it("It should transform response and send empty value", () => {
    const resp = transformResponse(transformedRes);
    expect(resp).toEqual([]);
  });
});
