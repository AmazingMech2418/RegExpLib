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
var bin = 1;
        var arr = [];

for (var i=0; i<Math.factorial(this.source.length); i++) {
bin=Math.toBinary(i+1);
    var str = "";
    for (var a=this.source.length-1; a>0; a--) {
        if(bin[a] === 1) {
        str = str+this.source[a].toUpperCase();
        } else {
                str = str+this.source[a].toLowerCase();

        }
        arr.push(str);
    }
}
    return arr;
} else {
console.error(Error("Can't find all of anything but /(text)/i"));
return undefined;
}
};

