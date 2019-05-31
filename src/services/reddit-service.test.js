import RedditService from "./reddit-service";
import MockAdapter from "axios-mock-adapter";

// Get subreddit
describe("Fetch subbit", () => {
  const redditsvc = new RedditService("baseUrl");
  const response = {
    data: { children: [{ id: 1, name: "test" }, { id: 2, name: "test1" }] }
  };
  const error = { code: 404, status: "Not Found" };
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(redditsvc.client);
  });

  afterEach(() => {
    mock.reset();
  });

  it("fetch sub reddit posts success", () => {
    mock.onGet("/r/reactjs.json?limit=50").reply(200, response);
    return redditsvc.getSubReddits("reactjs").then(res => {
      expect(res).toEqual(response);
    });
  });

  it("fetch sub reddit posts failure", () => {
    mock.onGet("/r/reactjs.json?limit=50").reply(404, error);
    return redditsvc.getSubReddits("reactjs").catch(error => {
      expect(error).toEqual(error);
    });
  });
});
