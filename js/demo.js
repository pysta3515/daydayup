const obj = {
    _msg: "hello world",
    get msg() {
        return this._msg;
    },
    set msg(value) {
        this._msg = `hello ${value}`;
    },
};

console.log(obj.msg);
// Expected output: "c"
obj.msg = "banana";
console.log(obj.msg);
console.log(Object.getOwnPropertyDescriptor(obj, "_msg"));
console.log(Object.getOwnPropertyDescriptor(obj, "msg"));

Object.defineProperty(obj, "name", {
    value: "fengyl",
    writable: true,
    enumerable: false,
    configurable: true,
});
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    const element = obj[key];
    console.log(key, obj[key]);
}

for (const key in [1, 2, 3]) {
    console.log(key);
}

Object.entries(o);
