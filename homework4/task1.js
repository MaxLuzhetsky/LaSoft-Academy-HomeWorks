const matrixArr = [[1,2,3,4],[12, 13, 14, 5],[11, 16, 15, 6],[10,  9,  8, 7]] 

function unravelArr (arr) {
    let result = []
    for (let i=0; i < arr.length ; i++){
       result = result.concat(arr[i]).sort((a,b) => a-b)
    }
    console.log(result)
}
console.log(matrixArr)
unravelArr(matrixArr )