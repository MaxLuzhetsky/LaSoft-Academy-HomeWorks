function checkNumberValues(num) {
    let numStr = num.toString().split('').map(Number)
    let sum = numStr.reduce((a, b) => a + b)
    let checkHalves = 0
    let checkDig = 0
    let arr = numStr.filter((item, index) => numStr.indexOf(item) != index)

    if ((numStr[0] + numStr[1]) === (numStr[2] + numStr[3])) {
        checkHalves = true
    } else {
        checkHalves = false
    }
    if (arr.length > 0) {
        checkDig = true
    } else {
        checkDig = false
    }

    let obj = {
        "sum": sum,
        "hasSameDigit": checkDig,
        "areHalvesEqual": checkHalves
    }
    console.log(obj)
}
checkNumberValues(5154)