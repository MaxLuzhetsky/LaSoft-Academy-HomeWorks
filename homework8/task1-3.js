let range = {
    from: 1,
    to: 10,
};

let rangeArr = []

let number = range.from
while (number <= range.to) {
    rangeArr.push(number)
    number++
}

console.log("task1")
for (let num of rangeArr) {

    console.log(num)
}

console.log("task2")
for (let num of rangeArr) {
    if (num % 2 !== 0) {

        console.log(num)

    }
}

console.log("task3")
for (let num of rangeArr) {
    if (num % 2 === 0) {

        console.log(num)

    }

}