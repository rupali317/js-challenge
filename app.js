/*****************************************************************
 * ⏳ THE 60-MINUTE JAVASCRIPT CHALLENGE: "THE SHOPPING CART API"
 * * Instructions:
 * Complete the functions below. Do not change the function names.
 * Your goal is to make all tests output "✅ PASSED".
 *****************************************************************/

// ===============================================================
// PART 1: DOM MANIPULATION
// ===============================================================

/**
 * Task 1: Update the welcome message text and inject an alert banner.
 * Topics: Changing text and HTML
 */
function updateHeader(elementId, userName) {
  // 1. Change the text content of the element to "Welcome, [userName]!"
  // 2. Append this exact HTML string inside the element: "<div class='banner'>Premium Account</div>"
  const element = document.getElementById(elementId);
  element.textContent = `Welcome, ${userName}!`;
  const bannerDiv = document.createElement("div");
  bannerDiv.className = "banner";
  bannerDiv.textContent = "Premium Account";
  element.appendChild(bannerDiv);
  // element.innerHTML += `<div class='banner'>Premium Account</div>`;
}

/**
 * Task 2 & 3: Create list items for products and add them efficiently.
 * Topics: Creating HTML elements, Adding multiple elements to the DOM
 */
function renderProductList(containerId, productsArray) {
  // 1. Get the container element by its ID.
  // 2. Create a DocumentFragment to optimize DOM performance.
  // 3. Loop through productsArray, create a new 'li' element for each product string.
  // 4. Set the text content of the 'li' to the product string.
  // 5. Append all elements to the fragment, then append the fragment to the container.
  const container = document.getElementById(containerId);
  const fragment = document.createDocumentFragment();
  // const RefinedProductsArray = productsArray.map(
  //   (products) => `<li>${products}</li>`
  // );
  productsArray.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product;
    fragment.append(li);
  });
  container.append(fragment);
}

/**
 * Task 4: Clean up defective products from the DOM.
 * Topics: Removing elements from the DOM
 */
//exercises.removeDefectiveItems(".bad");
function removeDefectiveItems(selector) {
  // 1. Select all elements matching the selector (e.g., '.defective').
  // 2. Loop through them and remove them completely from the DOM.
  // YOUR CODE HERE
  /* const defectiveList = document.querySelectorAll(selector);
  for (const defective of defectiveList) {
    defectiveList.removeChild(defective);
  } */
}

// ===============================================================
// PART 2: LOGIC, STRINGS & PARAMETERS
// ===============================================================

/**
 * Task 5 & 6 & 7: Check if a user is eligible for a discount.
 * Topics: Ternary operators, AND/OR operators, Early returns
 * Rules:
 * - If the user is NOT logged in OR has isPremium status set to false, return 0 early.
 * - Otherwise, if cartTotal is 100 or more, return a 20% discount (0.2), else return 10% (0.1) using a ternary.
 */
function calculateDiscount(userStatus, cartTotal) {
  if (!userStatus.isLoggedIn || !userStatus.isPremium) return 0;
  return cartTotal >= 100 ? 0.2 : 0.1;
}

/**
 * Task 8 & 9 & 10: Generate a receipt summary string.
 * Topics: Template literals, Destructuring, Default parameters
 * Note: 'options' object has default parameters: tax defaults to 0.05, currency defaults to "$"
 */
function generateReceipt(item, { tax = 0.05, currency = "$" } = {}) {
  // 1. Destructure 'name' and 'price' from the item object.
  // 2. Calculate the final price: price + (price * tax)
  // 3. Return a template literal string: "Item: [name] | Total: [currency][finalPrice]"
  const { name, price } = item;
  const finalPrice = price + price * tax;
  return `Item: ${name} | Total: ${currency}${finalPrice}`;
}

// ===============================================================
// PART 3: ADVANCED OBJECTS & ARRAYS
// ===============================================================

/**
 * Task 11 & 12 & 16: Merge product data and return a configured item object.
 * Topics: Enhanced object literals, Rest/Spread, Implicit returns
 * Note: Try to use an implicit return arrow function if possible!
 */
const createInventoryItem = (id, title, price, extraDetails) => {
  // 1. Return an object implicitly.
  // 2. Use enhanced object literal shorthand for id, title, and price.
  // 3. Spread all properties of the 'extraDetails' object into this new object.
  // 4. Add a calculated property 'isExpensive' which is true if price > 100, else false.
  // YOUR CODE HERE
};

/**
 * Task 13 & 14: Process cart data to get total price of active items.
 * Topics: Useful array methods (filter), Reduce
 */
function getActiveCartTotal(cartItems) {
  // 1. Use .filter() to keep only items where item.active is true.
  // 2. Use .reduce() to sum up the 'price' of those filtered items.
  // YOUR CODE HERE
}

/**
 * Task 15: Format warehouse inventory details into an array of strings.
 * Topics: Looping through objects
 * Input example: { aisleA: 12, aisleB: 40 }
 * Output example: ["Location aisleA holds 12 items", "Location aisleB holds 40 items"]
 */
function formatWarehouseStock(stockObject) {
  // YOUR CODE HERE
}

// Node.js export module pattern (Allows the test suite to read these functions)
if (typeof module !== "undefined") {
  module.exports = {
    updateHeader,
    renderProductList,
    removeDefectiveItems,
    calculateDiscount,
    generateReceipt,
    createInventoryItem,
    getActiveCartTotal,
    formatWarehouseStock,
  };
}
