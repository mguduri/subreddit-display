import getService from "./service-locator";
import { select } from "redux-saga/effects";
import { getAppConfig } from "../reducers";
import RedditService from "../services/reddit-service";

describe("service locator - sagas/service-locator.js", () => {
  it("It should return right service config", () => {
    const gen = new getService();
    expect(gen.next().value).toEqual(select(getAppConfig));
    const returnVal = gen.next({});
    let service = returnVal.value;
    expect(service instanceof RedditService).toBe(true);
    expect(returnVal.done).toBe(true);
  });
});
