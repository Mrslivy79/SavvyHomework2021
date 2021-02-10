let pizzaPlace;
let numberOfToppings;

pizzaPlace = "Pie House"
numberOfToppings = 3

console.log(pizzaPlace, typeof pizzaPlace); 
console.log(numberOfToppings, typeof numberOfToppings);

`The ${pizzaPlace} is known for ${numberOfToppings} topping pies.`

if (numberOfToppings = 5) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

i= 0;
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i +  " is even");
    }
    else (i % 2 === 0) {
        console.log(i + " is even");
    }    
}
