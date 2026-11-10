
// FoodStore is an in-memory singleton that stores food items.
// It contains five food items, each with an ID, name, and price.

class FoodStore {
    constructor() {
        this.foods = [
            { id: 1, name: "Burger", price: 8.99 },
            { id: 2, name: "Pizza", price: 12.99 },
            { id: 3, name: "Pasta", price: 10.99 },
            { id: 4, name: "Salad", price: 7.99 },
            { id: 5, name: "Sandwich", price: 6.99 }
        ];

        console.log("FoodStore initialized with 5 food items.");
    }

    // Returns all food items stored in memory.
    getAll() {
        console.log("getAll() called. Returning all food items.");
        return this.foods;
    }
}

// Create and export one shared instance (singleton).
const foodStore = new FoodStore();

module.exports = foodStore;
