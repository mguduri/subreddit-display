import { takeEvery } from 'redux-saga/effects';
import {
    SUBREDDIT_POSTS_FETCH_REQUEST,
} from '../actions/types';
import getSubRedditPosts from './get-subreddit-posts';

export default function* rootSaga() {
    yield takeEvery(SUBREDDIT_POSTS_FETCH_REQUEST, getSubRedditPosts);
}
