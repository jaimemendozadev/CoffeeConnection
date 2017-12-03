const Drink = require('../models/drink.js');
const DrinkData = JSON.parse(require('./Drink.json'));
function createDrinks(){

  //console.log("the DrinkData is ", DrinkData);
  console.log("the Drink is ", JSON.stringify(Drink))

      

}

createDrinks();