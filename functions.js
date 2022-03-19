function sum(x, y) {
    return x + y;
}
function sum2(x, y) {
    return x + y;
}
console.log("first");
sum(4, 5);
sum2(6, 7);
var sum3 = function (x, y) {
    return x + y;
};
function invite(firstInvitation) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return firstInvitation + " " + others.join(" ");
}
console.log(invite("azad", "rasim", "fidan", "qulam", "qafar", "firuz", "hesen", "derya"));
