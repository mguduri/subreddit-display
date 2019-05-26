import { select } from 'redux-saga/effects';
import RedditService from '../services/reddit-service';
import { getAppConfig } from '../reducers';
let config = undefined;

/**
 * service locator
*/
export default function* getService() {
    config = yield select(getAppConfig);
    return new RedditService(config.REDDITSVC);            
}
