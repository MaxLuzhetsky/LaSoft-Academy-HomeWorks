function infiniteSum(arg) {
    let total = 0;
    function inner(arg) {
        console.log(typeof arg)
        if (typeof arg === "function") {
            arg(total);
        } else {
            total += arg;
            return inner;
        }
    }
    
    return inner(arg);
}
infiniteSum(5)(3)(4)(result => {console.log(result)})