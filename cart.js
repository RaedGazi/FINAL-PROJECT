// Get the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Initialize the cart items array
let cartItems = [];

// Add a click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle the click event
function addToCart(event) {
  // Get the parent product element
  const product = event.target.parentNode;

  // Get the product details
  const productName = product.querySelector('h2').textContent;
  const productDescription = product.querySelector('p').textContent;

  // Create a new cart item object
  const cartItem = {
    name: productName,
    description: productDescription
  };

  // Add the cart item to the cart items array
  cartItems.push(cartItem);

  // Update the cart display
  updateCartDisplay();

  // Store the cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to update the cart display
function updateCartDisplay() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  // Loop through the cart items array and create list items for each item
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + ' - ' + item.description;
    cartList.appendChild(li);
  });
}

// Check if there are any cart items stored in local storage on page load
window.addEventListener('load', function() {
  const storedCartItems = localStorage.getItem('cartItems');

  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
    updateCartDisplay();
  }
});
