const cartItems = [];
const buttons = document.querySelectorAll('.add-to-cart');
const cartList = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const name = button.parentElement.querySelector('h3').innerText;
    const price = parseFloat(button.parentElement.querySelector('p').innerText.replace('₾', ''));
    cartItems.push({ id, name, price });
    renderCart();
  });
});

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;
  cartItems.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.innerText = `${item.name} - ₾${item.price}`;
    cartList.appendChild(li);
  });
  totalDisplay.innerText = total.toFixed(2);
}
