function argumentsLogger() {

    let arr = [...arguments]
    let result = ""

    for (let i = 0; i < arr.length; i++) {
        result += `argument ${i}: ${arr[i]}; `
    }
    return result
}
console.log(argumentsLogger([1, 2], "xyz", 365));