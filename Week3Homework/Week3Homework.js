let pizzaToppings = ["beef", "bacons", "onions", banana peppers];

function greetCustomer()
{
    "Welcome to Pizza House, our toppings are: 
    for(let topping of pizzaToppings) {
      greeting += `${topping}, `};
}
greetCustomer()

function getPizzaOrder(size, crust, ....toppings){
  let order = `One ${size} ${crust} crust pizza with `
  for(let topping of pizzaToppings) {order += `${toppings}, `;
}
console.log(`${order}, coming up!`);
return [size, crust, toppings];
}
getPizzaOrder("Large", "Hand-Tossed", "Toppings")

function preparePizza ([orderSize, orderCrust, orderToppings]){
console.log(""...CookingPizza..."")
return { size: orderSize,
crust: orderCrust,
toppings: orderToppings
};
}
preparePizza(getPizzaOrder);
