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

