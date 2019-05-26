import { select } from 'redux-saga/effects';
import RedditService from '../services/reddit-service';
import { getAppConfig } from '../reducers';

/**
 * service locator
*/
export default function* getService() {
    const config = yield select(getAppConfig);
    return new RedditService(config.REDDITSVC);            
}
