function randomArr(arr , n) {
    let copyArr =  arr.sort(() => Math.random() - Math.random()).slice(0, n)
    console.log(copyArr)
  }
  randomArr([12, 34, 23, 56] , 2)