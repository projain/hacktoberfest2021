// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
let fruits = [
    { name: 'apple', color: 'red', pricePerKg: 120 },
    { name: 'banana', color: 'yellow', pricePerKg: 20 },
    { name: 'Kiwi', color: 'green', pricePerKg: 50 },
    { name: 'Blackberry', color: 'purple', pricePerKg: 70 },
    { name: 'watermelon', color: 'pink', pricePerKg: 40 },
    { name: 'Grapes', color: 'green', pricePerKg: 35 },
    { name: 'orange', color: 'orange', pricePerKg: 65 },
    { name: 'strawbeery', color: 'pink', pricePerKg: 80 },
    { name: 'avocado', color: 'lightyellow', pricePerKg: 55 },
    { name: 'pomegranate', color: 'lightred', pricePerKg: 45 },
    { name: 'papaya', color: 'greenyellow', pricePerKg: 55 },
    { name: 'pears', color: 'chartreuse yellow', pricePerKg: 55 },
    { name: 'mango', color: 'yellow', pricePerKg: 30 }
];
fruit = {};
fruits.forEach((value) => {
    x = value.name;
    fruit[x] = value;
});
function get_fruit_details(name) {
    x = fruit[name];
    if (x == undefined)
        {return 'Details not available';}
    return x;
}
let fruitname = prompt('Enter fruit name that you wanna get the color and price of ; ');
console.log(get_fruit_details(fruitname));
