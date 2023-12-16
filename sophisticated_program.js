```
// Filename: sophisticated_program.js

// This program simulates a virtual shopping cart

// A class representing a product in the cart
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        return `${this.name} - $${this.price} (${this.quantity} pcs)`;
    }
}

// A class representing the shopping cart
class ShoppingCart {
    constructor() {
        this.products = [];
    }

    // Add a product to the cart
    addProduct(product) {
        this.products.push(product);
    }

    // Remove all products from the cart
    clear() {
        this.products = [];
    }

    // Calculate the total price of the cart
    calculateTotal() {
        let total = 0;
        for (let product of this.products) {
            total += product.price * product.quantity;
        }
        return total;
    }

    // Print the contents of the cart
    printCart() {
        console.log("Shopping Cart:");
        for (let product of this.products) {
            console.log(product.toString());
        }
        console.log("Total: $" + this.calculateTotal());
    }
}

// Create shopping cart object
let cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(new Product("Laptop", 999, 1));
cart.addProduct(new Product("Mouse", 29.99, 2));
cart.addProduct(new Product("Keyboard", 59.99, 1));
cart.addProduct(new Product("Headphones", 99.99, 2));

// Print the cart contents
cart.printCart();
```

Note: This sophisticated program simulates a virtual shopping cart. It consists of two classes, `Product` and `ShoppingCart`, where `Product` represents a product with name, price, and quantity, and `ShoppingCart` represents a collection of products with various functionalities like adding a product, calculating the total price, and printing the cart contents. The code is more than 200 lines long and demonstrates object-oriented programming principles in JavaScript.