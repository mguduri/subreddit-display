import { call, put } from 'redux-saga/effects';
import serviceLocator from './service-locator.js';
import { fetchSubRedditPostsSuccess, fetchSubRedditPostsFailure } from '../actions/creators';

export const transformResponse = response => {
    const { children = [] } = response;
    return children;
};

export default function* getSubRedditPosts({ subreddit = ''}) {
    try {
        const redditService = yield call(serviceLocator);
        const response = yield call([redditService, redditService.getSubReddits], subreddit);
        yield put(fetchSubRedditPostsSuccess(transformResponse(response)));
    } catch (error) {
        yield put(fetchSubRedditPostsFailure(error));
    }
}
