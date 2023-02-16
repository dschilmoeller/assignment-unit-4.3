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

// identical functionality:
function listItem2 (array) {
    for (item of array) {
        console.log(item)
    }
}

//Test:
console.log('You have the following items in the basket:')
listItem();
listItem2(basket);


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
    if ( basket.length < 5 ) {
        return false;
    } else {
    return true
    }
} // end isFull

//testing

addItem('chips')
addItem(' sausages')
addItem(' turkey')
addItem(' bacon')
addItem(' mozzerella')

console.log(`in the basket is ${basket}`);
console.log(`The Basket is full?`, isFull());
empty()
console.log(`The Basket is full?`, isFull())

//Update the required addItem function to:
    // Use the isFull function to prevent more than maxItems from being added to the basket.
    // If an item was added to the array, return true
    // If there was no room and the item could not be added return false

function addItem2 (item) {
    if (isFull() === false) {
        basket.push(item);
        return true;
    } else {
        console.log("Dang basket is empty.") // this does keep coming up and I can't figure out why it won't run the console.log.
        return false;
    }
} //end addItem2

//Testing
console.log("Let's add some items.")
console.log('Adding some food.', addItem2('Chicken Tenders'));
console.log('Adding some food.', addItem2('chips'))
console.log('Adding some food.', addItem2('sausages'))
console.log('Adding some food.', addItem2('turkey'))
console.log('Adding some food.', addItem2('bacon'))
console.log(basket)
console.log("If false, food don't fit.", addItem2('mozzerella')) // should false
console.log("If false, food donn't fit.", addItem2('chocolate mousse')) // should false
console.log("What's in the basket!?", basket)
// should stop at bacon.


// Create a function called removeItem. It should:
    // Take an input parameter for a string item
    // Use Array.indexOf to find the index of the first matching item in the basket.
    // Use Array.splice to remove the first matching item from the basket.
    // Return the item removed or null if the item was not found

function removeItem(stringItem) {
    let removedItemIndex = basket.indexOf(stringItem); // should be -1 or index.
    // console.log(removedItemIndex); // enable for testing only
    if ( basket.indexOf(stringItem) === -1 ) {
        return null
    } else {
        // including Kris' proposed solution to enhance readability and make more sense.
        let splicedVal = basket.splice(removedItemIndex,1); // perform slice and save the value sliced out.
        console.log(splicedVal + ' has been removed'); // console log BEFORE return.
        return splicedVal;
        // original solution below.
        // basket.splice(removedItemIndex,1);
        // return console.log(basket[removedItemIndex] + ' has been removed.')
        
        // quite confident there's a more elegant solution. 
    } 
}

console.log(removeItem('chips')) // should return 'chips has been removed'; then return ['chips'] on the next line.

console.log(basket) // should be basket sans chips.

console.log(removeItem('salmon')) // should return null.

console.log(removeItem('chips')) // should return null. 
