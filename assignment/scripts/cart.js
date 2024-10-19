console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(basket);

function addItem(item){
basket.push(item);
return true;
}

console.log(`Adding chips and queso:`, addItem(`chips and queso`));
console.log(`basket is ${basket}`);

function listItems (){
for (let item of basket){
    console.log(item);
    }
}
console.log (`items in the basket:`);
listItems();

function empty(){
    basket.length = 0; 
    console.log (`Basket set to 0`);
}
empty();

const maxItems = 5;

function isFull(){
    if (basket.length < maxItems){
        return false; 
    }
    else {
        return true;
        }
}
console.log()



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
