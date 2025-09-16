"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ----------------- 1. Classes in Typescript --------------- */
/* Parent class */
class Player {
    height;
    weight;
    healthPoint;
    id;
    constructor(height, weight, healthPoint) {
        this.height = height;
        this.weight = weight;
        this.healthPoint = healthPoint;
        this.id = crypto.randomUUID();
        this.height = height;
        this.weight = weight;
        this.healthPoint = healthPoint;
    }
    /* Getter functions */
    get getHeight() {
        return this.height;
    }
    get getWeight() {
        return this.weight;
    }
    /* Setter Function */
    set setHeight(heightValue) {
        this.height = heightValue;
    }
}
const player1 = new Player(100, 150, 23);
console.log(player1.getHeight);
console.log(player1.getWeight);
player1.setHeight = 55;
console.log("Player Id: ", player1.id);
/* Child class */
class AdvancedPalyer extends Player {
    level;
    constructor(height, weight, healthPoint, level) {
        super(height, weight, healthPoint);
        this.level = level;
        this.level = level;
    }
}
class Product {
    name;
    price;
    stock;
    id = crypto.randomUUID();
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getId = () => this.id;
}
const product1 = new Product("laptop", 50000, 30);
console.log(product1.getId());
//# sourceMappingURL=index.js.map