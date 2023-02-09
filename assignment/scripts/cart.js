console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = []
const maxItems = 5

// Create a function called addItem. It should:
    // take an input parameter for a string item
    // add the new item to the global array basket.
    // return true indicating the item was added
function addItem (item) {
    basket.push(item);
    return true;
} // end addItem

console.log('Add carrot to basket',addItem('Carrot'));
console.log('Add cucumber to basket',addItem('Cucumber'))

//Create a function called listItems. It should:
    //loop over the items in the basket array
    //console.log each individual item on a new line

function listItem ( ) {
    for (i=0; i<basket.length; i++) {
        console.log(basket[i])
    }
} /// end listItem

//Test:
console.log('You have the following items in the basket:')
listItem();

//Create a function called empty. It should:
    //reset the basket to an empty array

function empty() {
    if ( basket.length === 0 ) {
        console.log('I am afraid I cannot do that, Dave.')
    } else {
        basket = [];
        console.log('Are you just going to leave all this stuff on the floor?')
    }
} // end empty

console.log('Enough of this healthy nonsense. Start over.')
empty();


console.log('Now for something tastier')
addItem('Chips');
addItem('Sausages');
addItem('Bacon');
listItem();
empty();
empty();

//Create a function called isFull(). It should:
    //return false if the basket contains less than max number of items
    //return true otherwise (equal or more than maxItems)
function  isFull() {
    
}