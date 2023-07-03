/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var t=[];
  var c={};
    
    for(let i=0;i<transactions.length;i++){
      t=transactions[i];
      if(c[t.category]){
          c[t.category]+=t.price;
      
        }else{
          c[t.category]=t.price;
          
        }
    }
    
    var keys=Object.keys(c);
    var result=[];
    for(var i=0;i<keys.length;i++){
      result.push({ category:keys[i] , totalSpent:c[keys[i]]});
          // console.log(keys[i]);
          // console.log(c[keys[i]]);
    }
  return result;
}
module.exports = calculateTotalSpentByCategory;
