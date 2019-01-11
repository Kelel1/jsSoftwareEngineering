class Menuitem {

  constructor(name, ingredients, price, calories) {
  
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    this.calories = calories;
    
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
                                   price = {small: "5.15", medium: "5.75", large: "6.55"},
                                  calories = {small: 190, medium: 280, large: 330});

const PeachPerfection  = new Menuitem("PeachPerfection", ingredients = ["peach", "mango", "strawbery"],
                                   price = {small: "5.15", medium: "5.75", large: "6.55"},
                                   calories = {small: 210, medium: 320, large: 360});

const StrawberryDragon = new Menuitem("StrawberryDragon", ingredients = ["pitaya", "strawberry",
                                  "orange", "passionfruit", "mango", "banana"],
                                  price = {small: "5.85", medium: "6.25", large: "6.85"},
                                  calories = {small: 360, medium: 480, large: 610});

const StrawberryWhirl  = new Menuitem("StrawberryWhirl", ingredients = ["strawberry", "banana", "apple"],
                                   price = {small: "5.15", medium: "5.75", large: "6.55"},
                                   calories = {small: 210, medium: 310, large: 380});
                                   
                                   
let jamba = new Menu();

jamba.addMenuItem(StrawberryDragon);
jamba.addMenuItem(StrawberryWhirl);
jamba.addMenuItem(PapayaSunrise);

/* console.log(jamba); */
console.log(jamba.findMenuItems("mango")); 





