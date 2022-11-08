function quadraticEquation(a, b, c) {
    let x1 = 0
    let x2 = 0
    let error = ""
    try {
        if (a === 0 || b === 0 || c === 0) {
            error = "its not a quadratic equation"
            throw new SyntaxError(error)

        } else if (!a || !b || !c) {
            error = "Missing something"
            throw new SyntaxError(error)
        }


    } catch (err) {
        throw err
    }

    let discrim = b * b - 4 * a * c


    if (discrim > 0) {
        x1 = (-b + Math.sqrt(discrim)) / (2 * a)
        x2 = (-b - Math.sqrt(discrim)) / (2 * a)
        return `x1 = ${x1} and x2= ${x2}`

    } else if (discrim === 0) {
        x1 = x2 = -b / (2 * a)
        return `x1 = ${x1} and x2= ${x2}`
    } else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discrim) / (2 * a)).toFixed(2);

        return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`

    }

}



console.log(quadraticEquation(1, 5, 4));