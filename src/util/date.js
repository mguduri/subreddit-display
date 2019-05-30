export function getTotalDays(date) {
    var d = new Date(date).getDate();
    var n = new Date().getDate();
    return n-d;
}