var addButtonList = document.querySelectorAll('.add-btn');
var subtractButtonList = document.querySelectorAll('.subtract-btn');
var subtotalElement = document.getElementById('subtotalAmount');
var pricePerProduct = 45743; // Change this to the actual price per product

var totalAmount = 0;

addButtonList.forEach(function (addButton) {
    addButton.addEventListener('click', function () {
        handleQuantityChange(this, 'increase');
    });
});

subtractButtonList.forEach(function (subtractButton) {
    subtractButton.addEventListener('click', function () {
        handleQuantityChange(this, 'decrease');
    });
});

function handleQuantityChange(button, action) {
    var quantityInput = button.parentElement.querySelector('.amount');
    var totalPriceElement = button.closest('.item').querySelector('.total-price');
    var currentValue = parseInt(quantityInput.value, 10);

    if (action === 'increase') {
        quantityInput.value = currentValue + 1;
    } else if (action === 'decrease' && currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }

    // Update the total price
    var totalProductPrice = pricePerProduct * parseInt(quantityInput.value, 10);
    totalPriceElement.textContent = totalProductPrice;

    // Update the subtotal
    calculateSubtotal();
}

function calculateSubtotal() {
    var totalProductPrices = document.querySelectorAll('.total-price');
    totalAmount = Array.from(totalProductPrices).reduce(function (sum, element) {
        return sum + parseInt(element.textContent.replace('$', ''), 10);
    }, 0);

    subtotalElement.textContent = '$' + totalAmount;
}


document.getElementById('checkoutBtn').addEventListener('click', function() {
    window.location.href = 'checkout.html';
  });

  document.getElementById('backHome').addEventListener('click', function() {
    window.location.href = 'index.html';
  });


