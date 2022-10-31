function arrayDivisionFactory(num){
    function divideF(arr){
        let result = arr.map(el => el/num)
        console.log(result)
    }
   divideF([10, 20, 25])
  }
  arrayDivisionFactory(5)