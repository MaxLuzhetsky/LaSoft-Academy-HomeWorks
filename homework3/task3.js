function splitArr(str) {
    let arr = str.split(", ")
    let arrW = []
    let arrN = []
    for (let i=0 ; i < arr.length ; i++){
        if(isNaN(arr[i])){
            arrW.push(arr[i])
        }else{
            arrN.push(parseInt(arr[i]))
        }
    }
    console.log(arrW)
    console.log(arrN)
  }
  splitArr("Red, Green, Blue, 1, White, 3, 4, 5, 7")