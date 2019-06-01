import React from "react";
import { shallow, mount } from "enzyme";
import Pagination from "./pagination";

//TODO Add more tests
describe("<Pagination/> - component", () => {
  let pagination;
  const renderPosts = jest.fn();
  let data = [{data:{id:1}},{data:{id:2}}],
  itemsperPage = 2;

  afterEach(() => {
    renderPosts.mockClear();
  });

  it("should render Pagination", () => {
    pagination = mount(<Pagination renderPosts={renderPosts} data={data} 
        itemsperPage={itemsperPage}/>);
    expect(pagination.find(".pagination").length).toEqual(1);
  });

});
