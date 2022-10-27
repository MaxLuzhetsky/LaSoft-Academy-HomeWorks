function getFibonacci(n){
    let arr = [0,1]
    for (let i=2 ; i <= n ; i++){
        let prevN1 = arr[i-1]
        let prevN2 = arr[i-2]
        arr.push(prevN1+prevN2)
    }
    console.log(arr[arr.length-1])
}
getFibonacci(10)