function Check(a , b){
    let dif = a - b 
    let result = 0
    if(dif % 10 === 0){
     result = true
    }else{
     result = false 
    }
   console.log(result)
 }
 Check(276 , 1126)