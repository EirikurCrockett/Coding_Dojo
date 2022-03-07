function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

function randomPizza(){
    var crusts = ["Brooklyn Style", "Hand Tossed", "Deep Dish", "Pan", "Gluten-Free"]
    var sauces = ["Marinara", "Traditional", "BBQ", "Garlic Parmesan", "Alfredo", "Ranch", "Buffalo"]
    var cheeses = ["Mozzarella", "Feta", "parmesan", "Cheddar", "Provolone"]
    var toppings = ["Ham", "Beef", "Salami", "Pepperoni", "Italian Sausage", "Premium Chicken", "Bacon", "Philly Steak", "Jalapenos", "Onions", "Banana Peppers", "Olives", "Mushrooms", "Green Peppers", "Spinach", "Red Peppers"]


    var addCrust = crusts[Math.floor(Math.random()*crusts.length)]
    var addSauce = sauces[Math.floor(Math.random()*sauces.length)]
    var addCheeses = []
    var addToppings = []

    var cheeseCount = Math.floor(Math.random()*3)+1
    var toppingCount = Math.floor(Math.random()*5)+1

    while(cheeseCount>0){
        addCheeses.push(cheeses[Math.floor(Math.random()*cheeses.length)])
        cheeseCount--
    }

    while(toppingCount>0){
        addToppings.push(toppings[Math.floor(Math.random()*toppings.length)])
        toppingCount--
    }

    return pizzaOven(addCrust, addSauce, addCheeses, addToppings)
}


var pizza1 = pizzaOven("Deep Dish", "Traditional", ["Mozzarella"], ["Pepperoni", "Sausage"]);
var pizza2 = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella", "Feta"], ["Mushrooms", "Olives", "Onions"]);
var pizza3 = randomPizza();
var pizza4 = randomPizza();


console.log(pizza1)
console.log(pizza2)
console.log(pizza3)
console.log(pizza4)
