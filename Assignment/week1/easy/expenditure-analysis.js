/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = new Array();
  const map = new Object()
  for(let i = 0;i<transactions.length;i++){
    const category = transactions[i].category
    const price = transactions[i].price
    if(map.hasOwnProperty(category)){
      map[category]+= price
    }
    else{
      map[category]= price
    }
  }
  for(let key in map){
    ans.push({'category':key,'totalSpent':map[key]})
  }

  return ans;
}
transactions =[{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},
{
  id: 2,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'burger',
},{
  id: 3,
  timestamp: 1656076800000,
  price: 69,
  category: 'Shopping',
  itemName: 'cloth',
}]

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
