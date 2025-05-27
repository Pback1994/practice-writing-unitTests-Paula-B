const {
  addItemToCart,
  removeItemFromCart,
  getTotalItemsInCart,
} = require("../cart.js");

// Test Scenario #1: addItemToCart function

describe("addItemToCart", function () {
  // test a scenario where only one item is added.

  test("should return a new item with a valid name and quantity", function () {
    const originalCart = [];
    const newItem = { id: 789, item: "Blanket", price: 5 };
    const result = addItemToCart([...originalCart], newItem, 1);

    expect(result.length).toBe(originalCart.length + 1);
    expect(result).toContainEqual({ ...newItem, quantity: 1 });
  });

  // test if error message is thrown when a negative quantity of items is added.

  test("should throw error with negative quantity of items added to cart", function () {
    const originalCart = [];

    const newItem1 = { id: 356, item: "Boots", price: 75 };

    expect(() => {
      addItemToCart(originalCart, newItem1, -2);
    }).toThrow(`Item quantity must be greater than 0 to add to cart.`);
  });

  test("should throw error when 0 quantity of items is added to cart", function () {
    const originalCart = [];

    const newItem3 = { id: 981, item: "Shirt", price: 12 };

    expect(() => {
      addItemToCart(originalCart, newItem3, 0);
    }).toThrow(`Item quantity must be greater than 0 to add to cart.`);
  });
});

// Test Scenario #2: removeItemFromCart function

// test scenario where one item is removed item from cart.
describe("removeItemFromCart", function () {
  test("should remove one item from the cart", function () {
    const originalCart = [{ id: 789, item: "Blanket", price: 5, quantity: 1 }];
    const itemToRemove = { id: 789, item: "Blanket", price: 5 };

    const result = removeItemFromCart([...originalCart], itemToRemove);

    expect(result.length).toBe(originalCart.length - 1);
    expect(result).not.toContainEqual(originalCart[0]);
  });

  // test scenario where attempts are made to remove one item from cart that does not exist.

  test("should attempt to remove one item from cart that does not exist", function () {
    const originalCart = [
      { id: 789, item: "Blanket", price: 5 },
      { id: 456, item: "Shirt", price: 45 },
      { id: 478, item: "Glove", price: 45 },
    ];
    const itemToRemove = { id: 567, item: "Watch", price: 35 };

    expect(() => {
      removeItemFromCart(originalCart, itemToRemove);
    }).toThrow(`Item not found in cart.`);
  });

  // test scenario where attempts are made to remove the last item from the cart.

  test("should test to remove the last item added to the cart", function () {
    const originalCart = [
      { id: 789, item: "Blanket", price: 5 },
      { id: 456, item: "Shirt", price: 45 },
      { id: 478, item: "Glove", price: 45 },
    ];

    const lastItemInCart = originalCart[originalCart.length - 1];

    const result = removeItemFromCart([...originalCart], lastItemInCart);

    expect(result.length).toBe(originalCart.length - 1);
    expect(result).not.toContainEqual(lastItemInCart);
  });
});

// Test Scenario #3: getTotalitemsInCart function

// test scenario where the total number of items is calculated correctly.

describe("getTotalItemsInCart", function () {
  test("should add the total quantity of items in cart", function () {
    const originalCart = [
      { id: 789, item: "Blanket", price: 5, quantity: 1 },
      { id: 456, item: "Shirt", price: 45, quantity: 1 },
      { id: 478, item: "Glove", price: 45, quantity: 1 },
    ];

    const result = getTotalItemsInCart(originalCart);

    expect(result).toBe(3);
  });

  // test scenario where error is thrown if cart is empty.

  test("should throw an error is the cart is empty", function () {
    const originalCart = [];

    expect(() => {
      getTotalItemsInCart(originalCart);
    }).toThrow(`Cart is empty.`);
  });

  // test scenario where you need to calculate the total of items for a large quantity of items added to cart.

  test("should be able to calculate large quantities of items added to cart", function () {
    const originalCart = [];

    for (let i = 0; i < 100000; i++) {
      originalCart.push({ id: i, item: `Item: ${i}`, price: 1, quantity: 1 });
    }
    const result = getTotalItemsInCart(originalCart);

    expect(result).toBe(100000);
  });
});
