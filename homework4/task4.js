
function getNameScore (name) {
    
    const scores = {
  "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
  "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
  "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
  "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
}
   let arr = name.split('')
   let result = 0 
   let message = ""
   
  for (let el in scores){
      for (let i=0 ; i < arr.length;i++){
          if(arr[i] === el.toLowerCase()){
              result = result + scores[el]
          }
      } 
  }
  
  if(result >= 600){
    message = "THE BEST"
      console.log()
  }else if (301 <= result && result <= 599){
    message = "VERY GOOD"
  }else if (61 <= result && result <= 300){
    message =  "PRETTY GOOD"
  }else if (result <= 60){
    message =  "NOT TOO GOOD"
  }
  console.log(`Your result ${result} , which is ${message}`)
}
getNameScore("max")

