function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var meatPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(meatPizza);

var greekPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(greekPizza);

var neapolitanPizza = pizzaOven("traditional", "tomato", ["fresh mozzarella"], ["basil", "olive oil"]);
console.log(neapolitanPizza);

var meatballPizza = pizzaOven("traditional", "marinara", ["mozzarella", "ricotta"], ["basil", "meatballs"]);
console.log(meatPizza);
