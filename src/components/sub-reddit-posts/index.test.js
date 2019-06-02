import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
// page level imports
import { fetchSubRedditPostsRequest } from "../../actions/creators";
import SubRedditPostsContainer, {
  mapStateToProps,
  mapDispatchToProps
} from "./index";
import Search from "./search";

describe("container: SubRedditPostsContainer", () => {
  const state = {
    subRedditPosts: {
      isLoadingPosts: false,
      subRedditPosts: []
    },
    appConfig: {
      RedditService: "test"
    }
  };
  const mockStore = configureStore(),
    store = mockStore(state);
  let wrapper = shallow(<SubRedditPostsContainer store={store} />);

  it("should render SubRedditPostsContainer component", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("should render Search component", () => {
    wrapper = mount(<SubRedditPostsContainer store={store} />);
    expect(wrapper.contains(Search)).toBeTruthy();
  });

  describe("redux connect with SubRedditPostsContainer", () => {
    it("should map props from State", () => {
      const mappingState = mapStateToProps(state);
      expect(mappingState).toEqual({
        posts: [],
        isLoadingPosts: false
      });
    });
    it("should map all dispatch to props", () => {
      expect(mapDispatchToProps).toEqual({
        fetchSubRedditPostsRequest: fetchSubRedditPostsRequest
      });
    });
  });
});
