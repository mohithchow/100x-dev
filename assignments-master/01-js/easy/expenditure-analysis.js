/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

    // Iterate through each transaction
    transactions.forEach(transaction => {
        const { category, price } = transaction;

        // If the category is not already in the categoryTotals object, initialize it
        if (!categoryTotals[category]) {
            categoryTotals[category] = 0;
        }

        // Add the price of the current transaction to the total for its category
        categoryTotals[category] += price;
    });

    // Convert the categoryTotals object to an array of objects with 'category' and 'totalSpent'
    const result = Object.keys(categoryTotals).map(category => ({
        category,
        totalSpent: categoryTotals[category]
    }));

    return result;
 
}

module.exports = calculateTotalSpentByCategory;
