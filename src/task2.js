// The filter callback function's == operator should read!== instead of == in the code,
// and a return statement is also absent. The updated code is as follows:

const fruits = ["banana", "pear", "apple", "orange"];

function searchFruits(term) {
  return fruits.filter((fruit) => {
    return fruit.indexOf(term) !== -1;
  });
}

const results = searchFruits("e");
// Expected 'results' value: ['pear', 'apple', 'orange']
console.log(results);

//  just add the return statment to the  filter function
