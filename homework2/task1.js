function copyString(str, n){
  let result = ""
  if(n<0){
    return false
  }else{
    result = str.repeat(n)
  }
  console.log(result)
}
copyString("a" , 5)
