let pizzaToppings = ["beef", "bacons", "onions", "banana peppers"];

function greetCustomer()
{
    let greeting = "Welcome to Pizza House, our toppings are"; 
    for(let topping of pizzaToppings) {
      greeting += `${topping}, `};
}
greetCustomer()

function getPizzaOrder(size, crust, ...toppings){
  let order = `One ${size} ${crust} crust pizza with `
  for(let topping of pizzaToppings) {order += `${topping}, `;
}
console.log(`${order}, coming up!`);
return [size, crust, toppings];
}
let pizzaOrder = getPizzaOrder("Large", "Hand-Tossed", "Toppings")

function preparePizza ([orderSize, orderCrust, orderToppings]){
console.log("...CookingPizza...")
return { size: orderSize,
crust: orderCrust,
toppings: orderToppings

};
}
<<<<<<< HEAD
preparePizza(pizzaOrder);
=======
preparePizza(getPizzaOrder);
>>>>>>> 815c4cd39da5da1c6c70519b14ad7fe4e54cad0b
