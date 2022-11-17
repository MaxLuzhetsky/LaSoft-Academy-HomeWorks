const a = {
    apples: 2,
    grapefruits: 4,
    pineapple: 1,
  };
  
  
  const b = new Proxy(a , {
       get(target , name ){
          if (name in target){
              return target[name]
          }else{
              return "I have no such fruits"
          }
              
      
  }})
  console.log(b.apples)
  console.log(b.oranges)