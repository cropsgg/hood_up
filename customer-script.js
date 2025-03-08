// API Base URL
const API_BASE_URL = "http://localhost:3000/products";

// Fetch and render products from API
async function fetchProducts() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    console.error("Failed to fetch products:", response.statusText);
    return [];
  }
  return await response.json();
}

async function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = ''; // Clear existing content

  const products = await fetchProducts();

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image || 'placeholder.jpg'}" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button class="detail-link" onclick="viewDetails(${product.id})">View Details</button>
      <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });
}

// Real-time updates using WebSocket
const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = event => {
  console.log("Product update received:", event.data);
  renderProducts(); // Re-render products on update
};

// Initialize the customer site
document.addEventListener('DOMContentLoaded', renderProducts);
