class Menuitem {

  constructor(name, ingredients, price, calories) {
  
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    this.calories = calories;
    
  }
}

class Drink {

  constructor(item, size) {

    this.item = item;
    this.size = size;
    this.price = item.price.size;
    this.calories = item.calories.size;
  }
}

class Order {

  constructor() {

    this.orders = []
  }

  orderDrink(drink) {

    this.orders.push(drink);
  }

}

class Inventory {

	constructor() {
  
  
  	    /* this.inventory = [apple = {name: "apple", total: 0},banana = {name: "banana", total: 0},
  	                     orange = {name: "orange", total: 0}, papaya = {name: "papaya", total: 0},
  	                     ];  */
                         
  	this.inventory = {}
  }
  
  
	
  setInventory(ingredient, servings) {
  	
    this.inventory[ingredient] = servings;
  }
  
  haveServing(ingredient) {
  	
    if(this.inventory[ingredient] > 0) {
    
      this.inventory[ingredient] -= 1;
      return true;
    } else {
    	return false;
    }
  }
}

class Store {
	
  constructor(inventory) {
  	
    this.inventory = inventory;
  }  
  
  
  placeOrder(order) {
  
  	let drinks = [];
    
    for(let drink of order.orders) {
    	
      for(let itms of drink.item.ingredients) {
      	
        if(this.inventory.haveServing(itms)) {
        
        	drinks.push(drink);
        }
      }
      return drinks;
    }
    
  }
  
  
}
class Menu {

  constructor() {
  
  this.menuItems = [];
  
  }

  
  addMenuItem(item) {
    
    this.menuItems.push(item);
  }

  
  
  // my implementation
/*    findMenuItems(ingredient) {
  
    for(let i = 0; i < this.menuItems.length; i++) {
      
      for(let j = 0; j < this.menuItems[i].ingredients.length; j++) {
      
        if(this.menuItems[i].ingredients[j] === ingredient) {
        
         console.log(this.menuItems[i].name);
        } 
      }
      
    }    
  
  } */
  
  // professors implementation
   findMenuItems(ingredient) {
  
    let drinksToReturn = [];
    
    for (let menuItem of this.menuItems) {
    
      if(menuItem.ingredients.indexOf(ingredient) >= 0) {
        
        drinksToReturn.push(menuItem);
        
      }
    }
      return drinksToReturn;
  
  } 
  
}



const PapayaSunrise    = new Menuitem("PapayaSunrise", ingredients = ["papay", "strawberry", "peach"],
                                   price = {small: 5.15, medium: 5.75, large: 6.55},
                                  calories = {small: 190, medium: 280, large: 330});

const PeachPerfection  = new Menuitem("PeachPerfection", ingredients = ["peach", "mango", "strawbery"],
                                   price = {small: 5.15, medium: 5.75, large: 6.55},
                                   calories = {small: 210, medium: 320, large: 360});

const StrawberryDragon = new Menuitem("StrawberryDragon", ingredients = ["pitaya", "strawberry",
                                  "orange", "passionfruit", "mango", "banana"],
                                  price = {small: 5.85, medium: 6.25, large: 6.85},
                                  calories = {small: 360, medium: 480, large: 610});

const StrawberryWhirl  = new Menuitem("StrawberryWhirl", ingredients = ["strawberry", "banana", "apple"],
                                   price = {small: 5.15, medium: 5.75, large: 6.55},
                                   calories = {small: 210, medium: 310, large: 380});
                                   
                                   
let jamba = new Menu();
let drink = new Drink(StrawberryDragon, "small");
let shakeMill = new Inventory();
let order = new Order();
let shakeStore = new Store(shakeMill);

shakeMill.setInventory("orange", 100);
order.orderDrink(drink);
order.orderDrink(drink);
jamba.addMenuItem(StrawberryDragon);
jamba.addMenuItem(StrawberryWhirl);
jamba.addMenuItem(PapayaSunrise);
console.log(shakeStore.placeOrder(order));

/* console.log(jamba); */
//console.log(jamba.findMenuItems("mango")); 
//console.log(drink);

//console.log(shakeMill);
//console.log(shakeMill.haveServing("kiwi"));


