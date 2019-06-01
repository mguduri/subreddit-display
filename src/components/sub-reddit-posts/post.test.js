import React from "react";
import { shallow } from "enzyme";

import Post from "./Post";

describe("<Post/> - component", () => {
  const openPost = jest.fn();
  let data = {
    author: "author",
    title: "title",
    post_hint: "self",
    selftext: "test"
  };
  let post;
  beforeEach(() => {
    post = shallow(<Post data={data} openPost={openPost} />);
  });

  afterEach(() => {
    openPost.mockClear();
  });

  it("should render Post", () => {
    expect(post.find("h6").text()).toEqual("title");
  });

  it("should call openpost with title, selftext", () => {
    post.simulate("click");
    expect(openPost).toHaveBeenCalledWith("title", "test");
  });

  it("should call openpost with title, image", () => {
    const newProps = { data: { post_hint: "image", url: "url" } };
    post.setProps(newProps);
    post.simulate("click");
    expect(openPost).toHaveBeenCalled();
    expect(openPost.mock.calls[0][1].type).toBe("img");
  });

  it("should call openpost with title, video", () => {
    const newProps = {
      data: {
        author: "author",
        title: "title",
        selftext: "test",
        post_hint: "rich:video",
        url: "url",
        media: {}
      },
      openPost
    };
    post.setProps(newProps);
    post.simulate("click");
    expect(openPost).toHaveBeenCalled();
    expect(openPost.mock.calls[0][1].type).toBe("embed");
  });

  it("should call openpost with title, link", () => {
    const newProps = {
      data: {
        author: "author",
        title: "title",
        selftext: "test",
        post_hint: "link",
        url: "url"
      },
      openPost
    };
    post.setProps(newProps);
    post.simulate("click");
    expect(openPost).toHaveBeenCalled();
    expect(openPost.mock.calls[0][1].type).toBe("ul");
  });

  it("should call openpost with title, default value", () => {
    const newProps = {
      data: {
        author: "author",
        title: "title",
        url: "url",
        created: "1558756669"
      },
      openPost
    };
    post.setProps(newProps);
    post.simulate("click");
    expect(openPost).toHaveBeenCalledWith("title", "");
  });
});
