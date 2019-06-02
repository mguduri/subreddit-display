import {
  getAppConfig,
  getSubRedditPosts,
  isLoadingPosts,
  appConfig
} from "./index";

describe("reducers- root reducer", () => {
  it("appConfig - should initialize appConfig", () => {
    const state = {
      appConfig: {
        REDDITSVC: "https://www.reddit.com"
      }
    };
    expect(appConfig(state.appConfig)).toEqual(state.appConfig);
  });
  it("appConfig - should initialize appConfig with {} if empty", () => {
    expect(appConfig()).toEqual({});
  });
});

describe("Selector tests - root reducer", () => {
  const state = {
    subRedditPosts: {
      isLoadingPosts: false,
      subRedditPosts: []
    },
    appConfig: {
      RedditService: "test"
    }
  };
  it("isLoadingPosts", () => {
    expect(isLoadingPosts(state)).toEqual(false);
  });
  it("getSubRedditPosts", () => {
    expect(getSubRedditPosts(state)).toEqual([]);
  });
  it("getAppConfig", () => {
    expect(getAppConfig(state)).toEqual({
      RedditService: "test"
    });
  });
});
