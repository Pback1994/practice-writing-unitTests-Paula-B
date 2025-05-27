// Function to add items to cart.

function addItemToCart(cart, item, quantity) {
  if (quantity <= 0) {
    throw new Error(`Item quantity must be greater than 0 to add to cart.`);
  }
  cart.push({ ...item, quantity });
  return cart;
}

// Function to remove items from cart.

function removeItemFromCart(cart, item) {
  const index = cart.findIndex((cartItem) => cartItem.id === item.id);

  // conditional statement to identify if an index is found and remove it.

  if (index === -1) {
    throw new Error(`Item not found in cart.`);
  }

  cart.splice(index, 1);

  return cart;
}

// Function to calculate sum of items in cart.

function getTotalItemsInCart(cart) {
  let totalCartItems = 0;

  if (cart.length <= 0) {
    throw new Error(`Cart is empty.`);
  }

  for (const item of cart) {
    totalCartItems += item.quantity;
  }
  return totalCartItems;
}

/*
let shoppingCart = [];

const product1 = { id: 123, item: "Shorts", price: 25 };
const product2 = { id: 345, item: "Hat", price: 15 };

shoppingCart = addItemToCart(shoppingCart, product1, 4);
shoppingCart = addItemToCart(shoppingCart, product2, 2);
shoppingCart = removeItemFromCart(shoppingCart, product2, 1);

console.log(shoppingCart);
console.log(`Total Cart Items: ${getTotalItemsInCart(shoppingCart)}`);
*/

module.exports = { addItemToCart, removeItemFromCart, getTotalItemsInCart };
