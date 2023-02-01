import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket) {
	switch (price) {
		case PriceBracket.Low:
			return 10;
		case PriceBracket.Medium:
			return 20;
		case PriceBracket.High:
			return 30;
	}
}
/// Add your getOrders() function below:`
function getOrders(price: PriceBracket, orders: Order[][]) {
	let filteredOrders: Order[][] = [];
	let priceBracket = getMaxPrice(price);
	orders.forEach((restaurant) => {
		const orderFill = restaurant.filter(({ name, price }) => {
			return price <= priceBracket;
		});
		filteredOrders.push(orderFill);
	});
	return filteredOrders;
}
getOrders(PriceBracket.Low, orders);

/// Add your printOrders() function below:
function printOrders(restaurantArr: Restaurant[], orderArr: Order[][]) {
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
const elligibleOrders = getOrders(PriceBracket.High, orders);
printOrders(restaurants, elligibleOrders);
