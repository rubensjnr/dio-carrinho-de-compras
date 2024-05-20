async function addItem(userCart, item) {
  console.log(`Item adicionado ao carrinho: ${item.name}`);
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) userCart.splice(index, 1);
  console.log(`Item deletado do carrinho: ${name}`);
}

async function removeItem(userCart, index) {
  if (index >= 0 && index <= userCart.length)
    if (userCart[index - 1].qtd <= 1) {
      userCart.splice(index - 1, 1);
      console.log(`Produto removido do carrinho`);
      return;
    } else {
      userCart[index - 1].qtd--;
      userCart[index - 1].subtotal = () =>
        userCart[index - 1].price * userCart[index - 1].qtd;
      return;
    }
}

async function calculateTotal(userCart) {
  console.log('O total do seu carrinho é: ');
  const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(total);
  return total;
}
async function displayCart(userCart) {
  console.log('\nSeu carrinho: ');
  userCart.forEach((item, index) =>
    console.log(
      `Item ${index + 1}:
    - Produto: ${item.name}
    - Preço: R$ ${item.price}
    - Quantidade: ${item.qtd}x
    - Subtotal: R$ ${item.subtotal()}
    `,
    ),
  );
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
