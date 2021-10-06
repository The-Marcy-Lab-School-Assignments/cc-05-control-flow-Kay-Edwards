//1
function absoluteValue(abs_num){
  if(abs_num < 0){
      return abs_num*-1;
  }else if (abs_num >=0){
      return abs_num;
      
  }else
   return null;
}




//console.log(absoluteValue(10.35));
//console.log(absoluteValue("hello"));
//console.log(absoluteValue(-3));

//2 
function multiplesOffourAndSix (){
   let array=[];
    for(let i=1; i<=100; i++){
        if(i%4 === 0 && i%6 === 0){
            array.push(i);
        }
    }
    return array
}

console.log(multiplesOffourAndSix());