const randomBtn = document.getElementById("random-btn")
const searchBtn = document.getElementById("search-btn")

function getRandom(str){
    document.getElementById("output-container").innerHTML = ""
    document.getElementById("output-container").innerHTML = str
}




randomBtn.addEventListener("click" , function(){
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': '8102cc419dmsh7268c5b3e4ecc8bp1c9712jsn9b5ae4129105',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };

    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
        .then(response => response.json())
        .then((data) => getRandom(data.value))
        .catch(err => console.error(err));

       
    

})

function getSearched(arr){

    document.getElementById("output-container").innerHTML = ""

    let result = ""
       for (let i = 0 ; i < arr.length ;i++ ){
        document.getElementById("output-container").innerHTML  += `${i+1}. ${arr[i].value} <br><br>  `
       }
    
}

searchBtn.addEventListener("click", function(){
    let inputVal = document.getElementById("input-container").value;
    const options = {
        method: 'GET',
        params:{query:inputVal},
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': '8102cc419dmsh7268c5b3e4ecc8bp1c9712jsn9b5ae4129105',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };

   
    console.log(inputVal)
    
    fetch(`https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${inputVal}`, options)
        .then(response => response.json())
        .then(data => getSearched(data.result))
        .catch(err => console.error(err));
})


