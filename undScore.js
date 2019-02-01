// _.each
function helloEveryone(person){
	
  
	return _.each(person, hello = (name) => {console.log("Hello " + name)});
}

ppl = ["Kern", "Sean", "Erika"];
helloEveryone(ppl);



// _.map
function addFive(arr) {

	return _.map(arr, five = (number) => {console.log(number + 5)});
}
ppl = [1, 2, 3];
// 6, 7, 8
addFive(ppl);

function concat(arr) {
	
    let newStr = "";
      let l = _.reduce(arr, shrink = (mem, str) => {newStr += str},0);
    console.log(newStr);
}
ppl = ["1", "2", "3"];
// "123"
concat(ppl);

function longString(arr) {
	
  
    return _.find(arr,length = (string) => {if(string.length > 10) {
        console.log(string);
  }});
  
}
ppl = ["1", "20000000000000", "315"];
// "123"
longString(ppl);
// _.filter
function longStrings(arr) {
	
  
	return _.filter(arr,length = (string) => {if(string.length > 10) {
  console.log(string);
  }});
  
}
ppl = ["100000000000", "20000000000000", "310000000000005"];

longStrings(ppl);

// _.every
function allBig(arr) {
	
  
	return _.every(arr, bigNum = (n) => {return n['num'] > 100});  
  
}

// true
console.log(allBig([{num: 101}, {num: 1000, name: "Roy"} ]));

// _.pluck & _.uniq
function fishNames(arr) {
	
  let newArr = _.pluck(arr, 'fish'); 
	return _.uniq(newArr);  
  
}


console.log(fishNames([{fish: "Ahi", num: 100},
 {fish: "Ahi", num: 10000}, {fish: "Opah", num: 800}, {fish: "Opah", num: 350} ]));

 // _.sortBy
 function mostFishList(arr) {
	
  
	return _.sortBy(arr, mostFish = (n) => {return n['num']});  
  
}


console.log(mostFishList([{fish: "Ahi", num: 100}, {fish: "Ahi", num: 10000}, {fish: "Opah", num: 800}, {fish: "Opah", num: 350}]));

// _.groupBy
function fishGroups(arr) {
	
  
	return _.groupBy(arr, mostFish = (n) => {return n['fish']});  
  
}

console.log(fishGroups([{fish: "Ahi", num: 100}, {fish: "Ahi", num: 10000}, {fish: "Opah", num: 800}, {fish: "Opah", num: 350}]));

// _.pluck & _.reduce
function numFish(arr) {
	
  let newArr = _.pluck(arr, 'num');
	return _.reduce(newArr, function(counter, numberOfFish){return counter + numberOfFish}, 0);  
  
}


console.log(numFish([{fish: "Ahi", num: 100}, {fish: "Ahi", num: 10000}, {fish: "Opah", num: 800}, {fish: "Opah", num: 350}]));