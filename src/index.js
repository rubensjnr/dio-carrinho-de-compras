import createItem from './services/item.js';
import * as cartService from './services/cart.js';

const myCart = [];

const item1 = await createItem('mouse', 55.0, 2);
const item2 = await createItem('mousePad', 28.0, 1);

await cartService.addItem(myCart, item1);
await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

await cartService.removeItem(myCart, 1);
await cartService.displayCart(myCart);
