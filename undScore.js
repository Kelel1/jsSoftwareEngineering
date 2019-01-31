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

function longStrings(arr) {
	
  
	return _.filter(arr,length = (string) => {if(string.length > 10) {
  console.log(string);
  }});
  
}
ppl = ["100000000000", "20000000000000", "310000000000005"];
// "123"
longStrings(ppl);