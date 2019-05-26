
import { combineReducers } from 'redux';
import subRedditPosts, * as fromsubRedditPosts from './sub-reddit-posts';


/**
 * Appends appConfig to state
 * @param {object} state - appConfig initial state
 * @return {object} state - returns appConfig initial state for combine reducers
 */
export function appConfig(state = {}) {
    return state;
}

export default combineReducers({
    appConfig,
    subRedditPosts
});

// ****** root selectors ******
export const getAppConfig = state => state.appConfig;
export const getSubRedditPosts = state => fromsubRedditPosts.getSubRedditPosts(state.subRedditPosts);
export const isLoadingPosts = state => fromsubRedditPosts.isLoadingPosts(state.isLoadingPosts);
