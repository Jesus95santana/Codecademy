import products from "./products";

const productName: string = "tote bag";
const productOrder: string = "true";
const productPrice: string = "25";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = "575 Broadway";
const newYorkTax = shippingAddress.match("New York");

const filteredProducts = products.filter(filterFunction);

function filterFunction(products) {
	if (products.name !== productName) {
		return false;
	}
	if (products.preOrder !== productOrder) {
		console.log(`We will notify you when product is on the way!`);
	}
	if (Number(products.price) >= Number(productPrice)) {
		shipping = 0.0;
		console.log(`Shipping is free since product is over ${productPrice}`);
	} else {
		shipping = 5.0;
	}
	if (newYorkTax) {
		taxPercent = 0.1;
	} else {
		taxPercent = 0.05;
	}

	taxTotal = Number(products.price) * taxPercent;
	total = Number(products.price) + taxTotal + shipping;
	console.log(`we will send you ${products.name} to ${shippingAddress} worth ${products.price} with a tax total of ${taxTotal} and shipping of ${shipping} totaling ${total}!`);
	return products;
}

console.log(filteredProducts);
