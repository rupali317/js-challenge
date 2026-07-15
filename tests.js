const exercises = require("./app.js");

function runTests() {
  console.log("--- STARTING CHALLENGE TESTS ---");
  let score = 0;

  // Mock DOM environment for Node.js
  global.document = {
    getElementById: () => ({
      set textContent(v) {
        this.text = v;
      },
      set innerHTML(v) {
        this.html = v;
      },
      appendChild: (c) => {},
    }),
    querySelectorAll: () => [{ remove: () => {} }],
    createElement: () => ({}),
  };

  // Test 1-4 (DOM)
  try {
    exercises.updateHeader("test-id", "Anna");
    exercises.renderProductList("test-list", ["Apples", "Bananas"]);
    exercises.removeDefectiveItems(".bad");
    console.log("✅ PASSED: DOM Tasks compilation & structure");
    score++;
  } catch (e) {
    console.log("❌ FAILED: DOM Tasks error:", e.message);
  }

  // Test 5-7 (Logic)
  try {
    const d1 = exercises.calculateDiscount(
      { isLoggedIn: false, isPremium: true },
      150
    );
    const d2 = exercises.calculateDiscount(
      { isLoggedIn: true, isPremium: true },
      150
    );
    const d3 = exercises.calculateDiscount(
      { isLoggedIn: true, isPremium: true },
      50
    );
    if (d1 === 0 && d2 === 0.2 && d3 === 0.1) {
      console.log("✅ PASSED: Discount Logic");
      score++;
    } else {
      console.log("❌ FAILED: Discount Logic wrong values");
    }
  } catch (e) {
    console.log("❌ FAILED: Discount Logic error:", e.message);
  }

  // Test 8-10 (Strings)
  try {
    const res = exercises.generateReceipt(
      { name: "Shoes", price: 100 },
      { tax: 0.1, currency: "€" }
    );
    const resDefault = exercises.generateReceipt({ name: "Caps", price: 10 });
    if (
      res.includes("Item: Shoes | Total: €110") &&
      resDefault.includes("Total: $10.5")
    ) {
      console.log("✅ PASSED: Receipt Generation");
      score++;
    } else {
      console.log("❌ FAILED: Receipt Generation format incorrect");
    }
  } catch (e) {
    console.log("❌ FAILED: Receipt Generation error:", e.message);
  }

  // Test 11, 12, 16 (Objects)
  try {
    const item = exercises.createInventoryItem(45, "Drone", 120, {
      weight: "2kg",
      brand: "DJI",
    });
    if (item.id === 45 && item.brand === "DJI" && item.isExpensive === true) {
      console.log("✅ PASSED: Inventory Objects");
      score++;
    } else {
      console.log("❌ FAILED: Inventory Object mismatch");
    }
  } catch (e) {
    console.log("❌ FAILED: Inventory Objects error:", e.message);
  }

  // Test 13 & 14 (Reduce)
  try {
    const cart = [
      { price: 10, active: true },
      { price: 50, active: false },
      { price: 20, active: true },
    ];
    const total = exercises.getActiveCartTotal(cart);
    if (total === 30) {
      console.log("✅ PASSED: Array Methods & Reduce");
      score++;
    } else {
      console.log("❌ FAILED: Reduce expected 30, got:", total);
    }
  } catch (e) {
    console.log("❌ FAILED: Array Methods error:", e.message);
  }

  // Test 15 (Object Looping)
  try {
    const stock = { zoneA: 5, zoneB: 10 };
    const output = exercises.formatWarehouseStock(stock);
    if (
      output[0].includes("zoneA") &&
      output[0].includes("5") &&
      output.length === 2
    ) {
      console.log("✅ PASSED: Object Loop Formatting");
      score++;
    } else {
      console.log("❌ FAILED: Object Loop format unexpected");
    }
  } catch (e) {
    console.log("❌ FAILED: Object Loop error:", e.message);
  }

  console.log(`\n🏁 CHALLENGE COMPLETE. SCORE: ${score}/6`);
}

runTests();
