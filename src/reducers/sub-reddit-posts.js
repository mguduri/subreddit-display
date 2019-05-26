import { combineReducers } from 'redux';
import { SUBREDDIT_POSTS_FETCH_REQUEST, SUBREDDIT_POSTS_FETCH_FAILURE, SUBREDDIT_POSTS_FETCH_SUCCESS } from '../actions/types';

const initialState = null;

function subRedditPosts(state = initialState, { type, data } = {}) {
    switch (type) {
        case SUBREDDIT_POSTS_FETCH_SUCCESS:
            return data;
        case SUBREDDIT_POSTS_FETCH_FAILURE:
            return null;
        default:
            return state;
    }
};

function isLoading(state = false, { type }) {
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

export const getSubRedditPosts = state => state.subRedditPosts  || [];
export const isLoadingPosts = state => state && state.isLoading;