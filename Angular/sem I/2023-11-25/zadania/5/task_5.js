"use strict";
/**
 * In this task you have to connect multiple pieces together
 * but the general plan is:
 *
 * 1. Instantiate the supermarket
 * 2. Get products array and use it on supply() method of supermarket
 * 3. Print advertisement
 *
 * along the way...
 * - type everything nicely so TypeScript compiler is happy
 * - fix some small errors, typos and etc... maybe use TypeScript for that
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var supermarket_1 = require("./supermarket");
var supermarket = new supermarket_1.Supermarket();
supermarket.addSupplies(products_1.products);
supermarket.advertise();
//# sourceMappingURL=task_5.js.map