// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];

let groceryList = {
  item1: "Fruits",
  item2: "Milk",
  item3: "Flour",
  item4: "Orange"
};

for(let key in groceryList){
groceriesToBuy.push(groceryList[key])

}
console.log(groceriesToBuy);