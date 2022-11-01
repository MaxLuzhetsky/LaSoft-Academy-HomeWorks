function Check(str){
    let splited = str.split("")
    
    let result = 0;
  
    for ( let i=0 ; i < splited.length;i++){
      if(splited[0] === "i" && splited[1] === "f"){
        result = true
      }else{
        result = false
      }
    }
    console.log(result)
  }
  Check("iffa")
  