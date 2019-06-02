import moment from "moment";
export function getTotalDays(date) {
  var now = moment.unix(date).format("YYYYMMDD");
  return moment(now, "YYYYMMDD").fromNow();
}
