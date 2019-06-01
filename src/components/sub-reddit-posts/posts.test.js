import React from "react";
import { mount } from "enzyme";
import Pagination from "../common/pagination";
import ModalPopup from "../common/modal";
import Post from "./post";


import Posts from "./Posts";

describe("<Posts/> - component", () => {
  let props = [ {data:{id:1}},{data:{id:2}}];
  let posts;

    beforeEach(() => 
    {
      posts = mount(<Posts posts={props}/>);
    });

  it("should render Post and check for child components", () => {
    expect(posts.find(".posts-container").length).toEqual(1);
    expect(posts.contains(Pagination)).toBeTruthy();
    expect(posts.contains(ModalPopup)).toBeTruthy();
  });
  it("should render Post and check for child components", () => {
    const val = posts.instance().renderPosts([{data:{id:1}}]);
    expect(val.type).toBe('ul');
  });
  it("should render Post and check for child components", () => {
    const val = posts.instance().displayPosts({data:{}});
    expect(val.props.data).toEqual({});
  });
});
