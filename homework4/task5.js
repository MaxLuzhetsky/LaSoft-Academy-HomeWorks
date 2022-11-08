function specialReverse(string, letter) {
    let arr = string.split(" ")
    for ( let i=0; i < arr.length;i++){
        if(arr[i][0] === letter){
            arr[i] = arr[i].split("").reverse().join("")
        }
    }
    let result = arr.join(" ")
    console.log(result)
}
specialReverse("first man to walk on the moon", "m")