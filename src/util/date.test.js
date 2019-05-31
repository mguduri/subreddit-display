import { getTotalDays } from "./date.js";

describe("Get date in the expected format", () => {
  const expectedDate = "6 days ago",
  timeStamp = "1558756669";
  it("should show the date as 6 days ago", () => {
    Date.now = jest.fn(() => new Date('2019-05-30T11:01:58.135Z').valueOf()) 
    expect(getTotalDays(timeStamp)).toBe(expectedDate);
  });
});
