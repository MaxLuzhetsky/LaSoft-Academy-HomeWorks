function infiniteSum(arg) {
    let total = 0;
    function inner(arg) {
        total += arg;
        return inner;
    }
    inner.get = function () {
        return total;
    }

    return inner(arg);
}
console.log(infiniteSum(5)(3)(4).get())