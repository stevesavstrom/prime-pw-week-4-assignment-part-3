console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []; // Create a global variable named basket and set it to an empty array.
const maxItems = 5; // Add a global const named maxItems and set it to 5.

// Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added
function addItem (item){
  basket.push(item);
  return true;
}
console.log(`Basket is ${basket}`); // should log nothing (nothing added yet)
console.log('Adding socks - should log true.', addItem('socks')); // Item 1 - basket NOT full
console.log('Adding shoes - should log true.', addItem('shoes')); // Item 2 - basket NOT full
console.log('Adding belt - should log true.', addItem('belt')); // Item 3 - basket NOT full
console.log('Adding hoodie - should log true.', addItem('hoodie')); // Item 4 - basket NOT full
console.log('Adding jeans - should log true.', addItem('jeans')); // Item 5 - basket NOT full
console.log('Adding leggings - should log false.', addItem('leggings')); // Item 6 - basket is full
console.log(basket); // Should log 5 items in array (basket is full)
console.log(`Basket is now' ${basket}`); // should log socks, shoes, belt, hoodie, jeans

// Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line
// I used the first example here as a model: https://dmitripavlutin.com/foreach-iterate-array-javascript/

function listItems () { //Fixed to include for loop inside the function
  for (let item of basket) {
    console.log(item); // Should log socks, shoes, belt, hoodie, jeans
  }
}

listItems();

// Create a function called empty. It should:
// reset the basket to an empty array
function empty (){
  basket = [];
}
empty();
console.log('This should be an empty array', basket);

// ***** Stretch Goals *****

// 2. Create a function called isFull(). It should:
// - return false if the basket contains less than max number of items
// - return true otherwise (equal or more than maxItems)
function isFull (){
  if( basket.length < maxItems ){
    return false;
  }
  else{
    return true;
  }
}
console.log('The basket is full:', isFull()); // Should log false (basket starts empty)

// 3. Update the required addItem function to:
// - Use the isFull function to prevent more than maxItems from being added to the basket.
// - If an item was added to the array, return true
// - If there was no room and the item could not be added return false

function addItem (item){ // fixed to put basket.push(item) in correct place
  if (isFull()){
  return false;
} else  {
  basket.push(item)
  return true;
  }
}
console.log('Adding socks - should log true.', addItem('socks')); // Item 1 - basket NOT full
console.log('Adding shoes - should log true.', addItem('shoes')); // Item 2 - basket NOT full
console.log('Adding belt - should log true.', addItem('belt')); // Item 3 - basket NOT full
console.log('Adding hoodie - should log true.', addItem('hoodie')); // Item 4 - basket NOT full
console.log('Adding jeans - should log true.', addItem('jeans')); // Item 5 - basket NOT full
console.log('Adding leggings - should log false.', addItem('leggings')); // Item 6 - basket is full
console.log('Adding jacket - should log false.', addItem('jacket')); // Item 7: should say false (basket is full).
console.log(basket); // Should log 5 items in array (basket is full)
console.log('The basket is full:', isFull()); // Should log true now that the basket is full

// Using Array built-in functions!
// 4. Create a function called removeItem. It should:
// - Take an input parameter for a string item
// - Use Array.indexOf to find the index of the first matching item in the basket.
// - Use Array.splice to remove the first matching item from the basket.
// - Return the item removed or null if the item was not found

// I'm not sure what I'm doing here. This sort of works but doesn't feel right.
// I was using examples here: https://stackoverflow.com/questions/9792927/javascript-array-search-and-remove-string

// Update 1: I can't figure out how to fulfill the "null" requirement.
// Update 2: Shout out to Jose Rubio for the assist on this.

function removeItem( item ){
    let index = basket.indexOf( item );
    if( index == -1 ){
      return null
    } // If the item is not in the basket it will return -1
    return basket.splice( index, 1 );
 }

removeItem('hat'); // Testing an item not in the basket
console.log(basket); // Should return full basket with 5 items
removeItem('socks'); // Removing items one at a time.
console.log(basket);
removeItem('shoes');
console.log(basket);
removeItem('belt');
console.log(basket);
removeItem('hoodie');
console.log(basket);
removeItem('jeans');
console.log(basket); // All 5 items removed. Array empty.
