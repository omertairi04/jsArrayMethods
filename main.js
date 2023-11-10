


const food = ['apple' , 'carrot' , 'banana', 'pear' , 'orange' , 'raspberry' , 'tomato' , 'orange'];

// for each - when exectuting the same code on all elements
/*
food.forEach((element) => {
    console.log(element);
})
*/



// map - returns a new array with the same length but with the values as banana
/*
const bananas = food.map((item) => 'banana');
console.log(bananas);

const duplicatedFood = food.map((any) => any + any);
console.log(duplicatedFood); -> returns concatinates elements
*/



// filter - krijon array tri me elemente e filtruara
/*
const dataToFilter = [
    { type: 'A', value: 10 },
    { type: 'B', value: 20 },
    { type: 'A', value: 30 },
    { type: 'C', value: 40 },
    { type: 'B', value: 50 },
    { type: 'A', value: 60 },
    // ... more objects
];
const filteredData = dataToFilter.filter((item) => item.type === 'A');
console.log(filteredData);
*/


// concat - merges n arrays in one but it also works with a value or both (creates a new array!)

/*
const fruits = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato', 'cucumber'];

const food = fruits.concat(vegetables);
console.log(food);
*/

const foodArray = [
    {
        name: "Apple",
        type: "Fruit",
        color: "Red",
        taste: "Sweet",
    },
    {
        name: "Banana",
        type: "Fruit",
        color: "Yellow",
        taste: "Sweet",
    },
    {
        name: "Carrot",
        type: "Vegetable",
        color: "Orange",
        taste: "Crunchy",
    },
    {
        name: "Broccoli",
        type: "Vegetable",
        color: "Green",
        taste: "Mild",
    },
    {
        name: "Chocolate",
        type: "Dessert",
        color: "Brown",
        taste: "Sweet",
    },
];

// find - find an element 
/*
const chocolate = foodArray.find((item) => item.color === "Brown");

console.log(chocolate);
*/

// findIndex - njejt si find por kthen numrin e indexit nven te objektit
/*
const carrot = foodArray.findIndex((item) => item.color === "Orange");
console.log(carrot);
*/


// indexOf - bojm search me indexin e elementit , startIndex? - pi te cili indeks me fillu me bo search (optional)
/*
const orange = food.indexOf("orange" , 5);
console.log(orange);
*/


// lastIndexOf() - njejt si indexOf amo prej prap , startIndex? (optional)
/*
const orange = food.lastIndexOf('orange');
console.log(orange);
*/


// some - kur dojm me pa nqoftse me se paku 1 prej elementeve satisfies a condition
/*
const hasApple = foodArray.some((item) => item.name === "Apple")
console.log(hasApple);
*/



// every -> returns true nqoftse kejt elements satisfy the condition
/*
const hasType = foodArray.every((element) => element.type);
console.log(hasType);
*/



// includes - takes in the element , and return true if array includes that element
/*
const carrot = food.includes('carrot');
console.log(carrot);
*/



// push - adds element to the end of the array
/*
food.push("onion");
const food = ['apple' , 'carrot' , 'banana', 'pear' , 'orange' , 'raspberry' , 'tomato' , 'orange' , 'onion'];
*/



// unshift - adds the element to the start of the array
/*
food.unshift("onion");
const food = ['onion', 'apple' , 'carrot' , 'banana', 'pear' , 'orange' , 'raspberry' , 'tomato' , 'orange'];
*/



// pop - removes the last element from array
// food.pop();
// const food = ['onion', 'apple' , 'carrot' , 'banana', 'pear' , 'orange' , 'raspberry' , 'tomato'];



// shift - removes the first element of the array
// food.shift()
// const food = ['carrot' , 'banana', 'pear' , 'orange' , 'raspberry' , 'tomato'];



// toString - return the array but the values will be inside a string
/*
const stringFood = food.toString();
console.log(stringFood);
*/



// join -njejt si string amo nven se me i nda me , i ndan me qfardo attributi
/*
const foodstr = food.join(', ');
console.log(foodstr);
*/



// fill(element, startIndex, endIndex) - zevendson kejt elementet n'array me ni element , 
// startIndex? i zevendson vetem pi te startIndex
// endIndex? i zevendson deri te endIndex but does not include that index
/*
food.fill('bananass' , 2 , 4)
console.log(food);
*/



// slice - when you want to take a slice of the array(does not modify the original array)
// startIndex(optional) default=0 , endIndex(not included) (optional) default = lastIndex
/*
const slicedFood = food.slice(0 , 3);
console.log(slicedFood);
*/


/* splice(
    start , 
    deleteCount? ,
    item1? - element to add to the array,
    item2? -
    itemN? - 
    ) - used to insert, replace or remove an element/elements from an array ( modifies original array , and returns modified items)

*/

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
/*
const removedMonths = months.splice(0 , 1, "Jan");
console.log(removedMonths);
console.log(months)
*/


// sort - sorts an array
// months.sort();
// console.log(months); // ['April','August','December', 'February','January','July','June','March','May','November','October','September']



// reduce - 
const numbers = [3 , 5 , 8 , 10 , 3];
// find sum
const sum = numbers.reduce((previousVal , currentVal) => {
    console.log("P: " ,previousVal);
    console.log("C: " ,currentVal);
    return previousVal + currentVal;
}, 0)
// console.log(sum);

const cartArray = [
    {
        name: "Apple",
        type: "Fruit",
        color: "Red",
        taste: "Sweet",
        cost: 3320,
    },
    {
        name: "Banana",
        type: "Fruit",
        color: "Yellow",
        taste: "Sweet",
        cost: 9000,
    },
    {
        name: "Carrot",
        type: "Vegetable",
        color: "Orange",
        taste: "Crunchy",
        cost: 1200,
    },
    {
        name: "Broccoli",
        type: "Vegetable",
        color: "Green",
        taste: "Mild",
        cost: 7400,
    },
    {
        name: "Chocolate",
        type: "Dessert",
        color: "Brown",
        taste: "Sweet",
        cost: 2300,
    },
];

const cartCost = cartArray.reduce((prev , item) => {
    return prev + item.cost;
}, 0);

// console.log(cartCost);

// convert 2d array to object
const keyValPairs = [
    ["username" , "omer"],
    ["memberSince" , "2004-10-26"],
    ["age", 19]
]

const result = keyValPairs.reduce((prev , keyValuePair) => {
    const key = keyValuePair[0];
    const value = keyValuePair[1];

    prev[key] = value;

    return prev;
} , {});

console.log("Result: " , result);




































