function arrayDivisionFactory(array, num){
    function divideF(arr){
        let result = arr.map(el => el/num)
        console.log(result)
    }
   divideF(array)
  }
  arrayDivisionFactory([10, 20, 25],5)