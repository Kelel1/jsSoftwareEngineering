let numbers = [1, 2, 3, 4];

function sumFor(array) {

	let sum = 0;
  
  for(let num of array) {
  	
    sum += num;    
  	
  }
  
  return sum;
}

function sumWhile(array) {

	let sum = 0;
  let num = 0;
  
  while(num < array.length) {
  	
    sum += array[num++];
  	
  }
  return sum;
}

// professors implementation
 function sumRecurrsion(array) {

  let len = array.length;
  let sum = 0;
  
  if (len === 0) {
  
  	return 0;
  }     
  	return sum += (array[0] + sumRecurrsion(array.slice(1,array.length)));
  
  
} 

function sumTheSimpleWay(array) {

	return  _.reduce(array, function(val, num){return val += num}, 0);
}

console.log(sumRecurrsion(numbers));