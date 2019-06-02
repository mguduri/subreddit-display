import { takeEvery } from "redux-saga/effects";
import { SUBREDDIT_POSTS_FETCH_REQUEST } from "../actions/types";
import getSubRedditPosts from "./get-subreddit-posts";
import RootSaga from "../sagas";

describe("subreddits - rootSaga - sagas/index.js", () => {
  it("It should run root saga", () => {
    const gen = new RootSaga();
    expect(gen.next().value).toEqual(
      takeEvery(SUBREDDIT_POSTS_FETCH_REQUEST, getSubRedditPosts)
    );
  });
});
