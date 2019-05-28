import axios from "axios";

/**
 * service endpoint to fetch sub reddit posts
 * @class
 */
export default class RedditService {
  /**
   * Creates a new axios client and configures it
   * @constructor
   * @param {string} baseURL - BaseURL for Reddit
   */
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        Accept: "application/json"
      }
    });
  }

  /**
   * Used to fetch subreddit information
   * @returns {Promise<AxiosResponse<any>>} - Promise
   */
  getSubReddits(subreddit) {
    return this.client
      .get(`/r/${subreddit}.json`)
      .then(response => response.data);
  }
}
