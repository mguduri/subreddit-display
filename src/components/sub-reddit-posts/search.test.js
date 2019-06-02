import React from "react";
import { shallow, mount } from "enzyme";
import Search from "./search";

describe("<Search/> - component", () => {
  let search;
  const fetchSubRedditPostsRequest = jest.fn();
  let posts = [{ data: { id: 1 } }];
  let isLoadingPosts = false;

  afterEach(() => {
    fetchSubRedditPostsRequest.mockClear();
  });

  it("should render Search and check for child components", () => {
    search = mount(
      <Search
        posts={posts}
        isLoadingPosts={isLoadingPosts}
        fetchSubRedditPostsRequest={fetchSubRedditPostsRequest}
      />
    );
    expect(search.find(".primary-container").length).toEqual(1);
  });

  it("should call fetch subreddit posts on search", () => {
    search = mount(
      <Search
        posts={posts}
        isLoadingPosts={isLoadingPosts}
        fetchSubRedditPostsRequest={fetchSubRedditPostsRequest}
      />
    );
    search
      .find("input")
      .simulate("keypress", { key: "Enter", target: { value: "reactjs" } });
    expect(fetchSubRedditPostsRequest).toHaveBeenCalledWith("reactjs");
  });

  it("should not call fetch subreddit posts if search is empty", () => {
    search = mount(
      <Search
        posts={posts}
        isLoadingPosts={isLoadingPosts}
        fetchSubRedditPostsRequest={fetchSubRedditPostsRequest}
      />
    );
    search
      .find("input")
      .simulate("keypress", { key: "Enter", target: { value: "" } });
    expect(fetchSubRedditPostsRequest).not.toHaveBeenCalled();
  });

  it("should show spinner component on loading", () => {
    search = shallow(
      <Search
        posts={posts}
        isLoadingPosts={true}
        fetchSubRedditPostsRequest={fetchSubRedditPostsRequest}
      />
    );
    expect(search.find(".center-align").length).toEqual(1);
  });
  it("should return no results if there are not posts", () => {
    search = shallow(
      <Search
        posts={[]}
        isLoadingPosts={false}
        fetchSubRedditPostsRequest={fetchSubRedditPostsRequest}
      />
    );
    expect(search.find("span").length).toEqual(1);
  });
  it("should not render posts when posts are undefined", () => {
    search = shallow(
      <Search
        isLoadingPosts={false}
        fetchSubRedditPostsRequest={fetchSubRedditPostsRequest}
      />
    );
    expect(search.find("span").length).toEqual(0);
  });
});
