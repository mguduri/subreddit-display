
import { combineReducers } from 'redux';

/**
 * Appends appConfig to state
 * @param {object} state - appConfig initial state
 * @return {object} state - returns appConfig initial state for combine reducers
 */
export function appConfig(state = {}) {
    return state;
}

export default combineReducers({
    appConfig
});

// ****** root selectors ******
export const getAppConfig = state => state.appConfig;