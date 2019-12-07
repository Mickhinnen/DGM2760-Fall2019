let message
const pizza = { //{} defines oject litteral
    crust: 'thin',
    size: 'personal',
    topping: 'pepperoni',
    //when a function becomes part of an object it becomes a method
    buildPizza: function () {
       // check if working console.log('buildPizza method has been called')
        message = `Baking a ${pizza.size} sized pizza on a ${pizza.crust} crust with a ${pizza.topping} and cheese 
        just for you!`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        let addOns = 1
        if (pizza.crust === 'thick') flour *= 2
        // do the same for large(family) property
        if (pizza.size === 'family') flour *= 2, addOns *= 1.5
        message = ` You will need to purchase ${flour} cups of flour and ${addOns} lb of 
        ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}
//handle on radio button for crust
/*let thinButton = document.querySelector('#thin') // long way
thinButton.addEventListener('click', () => { //fuction () {} got syntax error
    //function should always return something
    return pizza.crust = 'thin'
})*/
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#olives').addEventListener('click', () => pizza.topping = 'olives')

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#personal').addEventListener('click', () => pizza.size = 'personal')

document.querySelector('#family').addEventListener('click', () => pizza.size = 'family')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)

document.querySelector('#list').addEventListener('click', pizza.shoppingList)