Math.factorial = function(arg) {
    if (arg === 0)
      { return 1; }
    else
      { return arg * Math.factorial( arg - 1 ); }
}
Math.toBinary = function(arg) {
    return (arg >>> 0).toString(2);
}
RegExp.prototype.getAll = function() {
if(this.ignoreCase===true) {
var bins = [];
for (var i=0; i<Math.factorial(this.source.length); i++) {
bins.push(Math.toBinary(i+1));
}
} else {
console.error(Error("Can't find all of anything but /(text)/i"));
return undefined;
}
};

