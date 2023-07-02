/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let y;
  var t=[];
  var c={};
    
    for(let i=0;i<transactions.length;i++){
      t=transactions[i];
      if(c[t.catagory]){
          c[t.catagory]+=t.price;
      
        }else{
          c[t.catagory]=t.price;
          
        }
    }
  return c;
}
let x =[
  {itemname:'cap', catagory:'clothes', price: 200, timestamp: 12343},
  {itemname:'shoes', catagory:'clothes', price: 500, timestamp: 2343},
  {itemname:'bat', catagory:'sports', price: 300, timestamp: 1243},
  {itemname:'chips', catagory:'food', price: 50, timestamp: 1234},
  {itemname:'soda', catagory:'food', price: 20, timestamp: 1343},
  {itemname:'ball', catagory:'sports', price: 80, timestamp: 1534}
];
console.log(calculateTotalSpentByCategory(x));
//calculateTotalSpentByCategory(x);
module.exports = calculateTotalSpentByCategory;
