// Please correct the following code so that it provides the
// 'smallFruitNames' with the correct fruit names.
function wrap(fruit) {
  if (fruit.weight > 0.3) {
    return; // Avoid wrapping fruits that are too heavy.
  }
  // Add the wrapping
  return {
    ...fruit,
    wrapped: true,
    weight: fruit.weight + 0.1,
  };
}
const fruits = [
  { name: "Banana", weight: 0.1, wrapped: false },
  { name: "Apple", weight: 0.3, wrapped: false },
  { name: "Pear", weight: 0.2, wrapped: false },
  { name: "Orange", weight: 0.4, wrapped: false },
];
// We need to find the names of the smaller wrapped fruits
// with weight less or equal to 0.3
const smallFruitNames = fruits
  .map(wrap)
  .filter((fruit) => fruit && fruit.wrapped && fruit.weight.toFixed(1) <= 0.3)
  .map((smallFruit) => smallFruit.name);

console.log(smallFruitNames);

//  we just use the .toFixed(1) to round off the weight os the fruit
