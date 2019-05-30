import { call, put } from "redux-saga/effects";
import serviceLocator from "./service-locator.js";
import {
  fetchSubRedditPostsSuccess,
  fetchSubRedditPostsFailure
} from "../actions/creators";

export const transformResponse = ({ data = {} }) => {
  const { children = [] } = data;
  return children;
};

export default function* getSubRedditPosts({ subreddit = "" }) {
  try {
    const redditService = yield call(serviceLocator);
    const response = yield call(
      [redditService, redditService.getSubReddits],
      subreddit
    );
    const posts = transformResponse(response);
    yield put(fetchSubRedditPostsSuccess(posts));
  } catch (error) {
    yield put(fetchSubRedditPostsFailure(error));
  }
}
