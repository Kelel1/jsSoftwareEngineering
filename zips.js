a = [1, 3, 5, 7];

b = [2, 4, 6, 8];

function ziplist(arr_1, arr_2) {

	let arr_3 = [];

	if (arr_1.length === arr_2.length) {
  
  	for(i = 0; i < arr_1.length; i++) {   	
      	
        arr_3.push(arr_1[i]);
        arr_3.push(arr_2[i]);
        
        
        /** prof. implementation:
         *  arr_3.push(arr_1, arr_2);
         */
        
    }
  }
  return arr_3;
}

function zipListTheSimpleWay(arr_1, arr_2) {

    /** prof. implementation:
         *  _.flatten(_.zip(arr_1, arr_2));
         */

 return _.sortBy(_.union(arr_1, arr_2));
} 

console.log(zipListTheSimpleWay(a, b));