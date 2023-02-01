"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
        case orders_1.PriceBracket.Medium:
            return 20;
        case orders_1.PriceBracket.High:
            return 30;
    }
}
/// Add your getOrders() function below:`
function getOrders(price, orders) {
    let filteredOrders = [];
    let priceBracket = getMaxPrice(price);
    orders.forEach((restaurant) => {
        const orderFill = restaurant.filter(({ name, price }) => {
            return price <= priceBracket;
        });
        filteredOrders.push(orderFill);
    });
    return filteredOrders;
}
getOrders(orders_1.PriceBracket.Low, orders_1.orders);
/// Add your printOrders() function below:
function printOrders(restaurantArr, orderArr) {
    // console.log(orderArr);
    restaurantArr.forEach(({ name }, index) => {
        if (orderArr[index].length != 0) {
            console.log(name);
            orderArr[index].filter(({ name, price }) => {
                console.log(`${name}: ${price}`);
            });
            console.log(`\n`);
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.High, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
