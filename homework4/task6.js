let car = "audi";
let bike = "cannondale";

function log () {
  let bike = "specialized";
  car = "jeep";
  
  function inner () {
    let plane = "boeing";
    console.log(car);
    console.log(bike);
    console.log(plane);
  }
  console.log(inner);
  return inner; 
}

console.log(car);
console.log(bike);

var logger = log();
logger();

console.log(car);
console.log(bike);
inner();

/* 

audi        
cannondale

[Function: inner]
jeep
specialized
boeing
jeep
cannondale
inner() is not defined

first outputs will be audi and cannondale , because function will run their console.log first . 
Then we call log() function and in this function will be created new bike variable and rewrited car variable .
After that console.log(inner) and then inner function will be called 
Then rewrited car variable and outer bike varible ;
And in the end "inner() is not defined" because we cant call this function outside log()

*/
