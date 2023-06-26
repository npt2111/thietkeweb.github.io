const quantityInput = document.querySelector('.quantity-input');
const quantity = quantityInput.querySelector('input[type="number"]');
const minusBtn = quantityInput.querySelector('.btn-minus');
const plusBtn = quantityInput.querySelector('.btn-plus');
const priceInput = document.querySelector('#price');

minusBtn.addEventListener('click', function() {
  if (quantity.value > 1) {
    quantity.value--;
    price.value = price.value /2;
  }
});

plusBtn.addEventListener('click', function() {
  quantity.value++;
    price.value = price.value *2;
});