// Media Fallback URLs for Vercel deployment
const MEDIA_FALLBACKS = {
  'hoodie1.jpeg': 'https://images.unsplash.com/photo-1565978771542-0fe16b79bcd4?q=80&w=800',
  'hoodie2.jpeg': 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=800',
  'hoodie3.jpeg': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800',
  'hoodie4.jpeg': 'https://images.unsplash.com/photo-1556498361-9b6ef6d53852?q=80&w=800',
  'hoodie5.jpeg': 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800',
  'hoodie6.jpeg': 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=800',
  'hoodie7.jpeg': 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800',
  'hoodie8.jpeg': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800',
  'hoodie9.jpeg': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800',
  'hoodie10.jpeg': 'https://images.unsplash.com/photo-1542327903-8ceae9e70a0c?q=80&w=800',
  'hoodie11.jpeg': 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800',
  'coolx front page video.mp4': 'https://player.vimeo.com/external/530231761.sd.mp4?s=5a12dd5d1b47ddeff753215f0fb8e9af10e02e78&profile_id=164&oauth2_token_id=57447761'
};

// Function to check if we're in production environment (Vercel)
function isProduction() {
  return window.location.hostname !== 'localhost' && 
         !window.location.hostname.includes('127.0.0.1');
}

// Function to get the correct URL for media files (original or fallback)
function getMediaUrl(filename) {
  // Check if we're in production and if we have a fallback for this file
  if (isProduction() && MEDIA_FALLBACKS[filename]) {
    return MEDIA_FALLBACKS[filename];
  }
  
  // Otherwise return the original filename
  return filename;
}

// Enhance image error handling
document.addEventListener('DOMContentLoaded', function() {
  // Fix video sources
  const videos = document.querySelectorAll('video > source');
  videos.forEach(source => {
    const originalSrc = source.getAttribute('src');
    if (originalSrc && isProduction() && MEDIA_FALLBACKS[originalSrc]) {
      source.setAttribute('src', MEDIA_FALLBACKS[originalSrc]);
      // Reload the video after changing source
      const video = source.parentElement;
      video.load();
    }
  });
  
  // Update product images in script
  if (typeof products !== 'undefined' && isProduction()) {
    products.forEach(product => {
      if (product.image && MEDIA_FALLBACKS[product.image]) {
        product.image = MEDIA_FALLBACKS[product.image];
      }
    });
  }
});

// Product data
const products = [
  { 
    id: 1, 
    name: 'Classic Black Hoodie', 
    price: 699, 
    image: 'hoodie1.jpeg',
    colors: ['black'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Premium Cotton, 320 GSM',
    description: 'Our signature hoodie in classic black. Made from premium cotton with a soft fleece interior for maximum comfort.',
    featured: true,
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  { 
    id: 2, 
    name: 'Vintage Grey Hoodie', 
    price: 799, 
    image: 'hoodie2.jpeg',
    colors: ['grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '80% Cotton, 20% Polyester, 300 GSM',
    description: 'A vintage-inspired grey hoodie with a relaxed fit. Perfect for layering or everyday wear.',
    featured: true,
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  { 
    id: 3, 
    name: 'Red Streetwear Hoodie', 
    price: 699, 
    image: 'hoodie3.jpeg',
    colors: ['red'],
    sizes: ['M', 'L', 'XL'],
    material: '100% Premium Cotton, 320 GSM',
    description: 'Stand out with this bold red hoodie. Features a modern cut with premium stitching and soft interior.',
    featured: false,
    rating: 4.7,
    reviews: 56,
    inStock: true
  },
  { 
    id: 4, 
    name: 'Navy Blue Comfort Hoodie', 
    price: 799, 
    image: 'hoodie4.jpeg',
    colors: ['navy'],
    sizes: ['S', 'M', 'L'],
    material: '100% Premium Cotton, 320 GSM',
    description: 'A sophisticated navy blue hoodie that transitions easily from casual to smart casual outfits.',
    featured: false,
    rating: 4.9,
    reviews: 82,
    inStock: true
  },
  { 
    id: 5, 
    name: 'Forest Green Hoodie', 
    price: 699, 
    image: 'hoodie5.jpeg',
    colors: ['green'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '80% Cotton, 20% Polyester, 300 GSM',
    description: 'A calming forest green hoodie to add a natural touch to your wardrobe. Features a relaxed fit with raglan sleeves.',
    featured: false,
    rating: 4.5,
    reviews: 45,
    inStock: true
  },
  { 
    id: 6, 
    name: 'Urban White Hoodie', 
    price: 799, 
    image: 'hoodie6.jpeg',
    colors: ['white'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Premium Cotton, 350 GSM',
    description: 'A clean, crisp white hoodie for a minimalist style. Made with extra-thick premium cotton for durability.',
    featured: true,
    rating: 4.7,
    reviews: 73,
    inStock: true
  },
  { 
    id: 7, 
    name: 'Bold Yellow Hoodie', 
    price: 699, 
    image: 'hoodie7.jpeg',
    colors: ['yellow'],
    sizes: ['S', 'M', 'L'],
    material: '100% Premium Cotton, 320 GSM',
    description: 'Brighten up your day with this vibrant yellow hoodie. Features a modern fit with kangaroo pocket.',
    featured: false,
    rating: 4.6,
    reviews: 38,
    inStock: true
  },
  { 
    id: 8, 
    name: 'Charcoal Grey Hoodie', 
    price: 799, 
    image: 'hoodie8.jpeg',
    colors: ['grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '80% Cotton, 20% Polyester, 300 GSM',
    description: 'A versatile charcoal grey hoodie that goes with everything. Features a contemporary cut with quality details.',
    featured: false,
    rating: 4.8,
    reviews: 91,
    inStock: true
  },
  { 
    id: 9, 
    name: 'Pastel Pink Hoodie', 
    price: 699, 
    image: 'hoodie9.jpeg',
    colors: ['pink'],
    sizes: ['S', 'M', 'L'],
    material: '100% Premium Cotton, 320 GSM',
    description: 'Add a soft touch to your collection with this pastel pink hoodie. Features a relaxed fit and soft fleece interior.',
    featured: true,
    rating: 4.9,
    reviews: 64,
    inStock: true
  },
  { 
    id: 10, 
    name: 'Royal Purple Hoodie', 
    price: 799, 
    image: 'hoodie10.jpeg',
    colors: ['purple'],
    sizes: ['M', 'L', 'XL'],
    material: '100% Premium Cotton, 350 GSM',
    description: 'Stand out with this royal purple hoodie. Made from heavyweight cotton for premium feel and durability.',
    featured: false,
    rating: 4.7,
    reviews: 52,
    inStock: true
  },
  { 
    id: 11, 
    name: 'Teal Blue Hoodie', 
    price: 699, 
    image: 'hoodie11.jpeg',
    colors: ['blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '80% Cotton, 20% Polyester, 300 GSM',
    description: 'A refreshing teal blue hoodie to brighten your style. Features a comfortable fit with high-quality stitching.',
    featured: false,
    rating: 4.6,
    reviews: 47,
    inStock: true
  },
  { 
    id: 12, 
    name: 'Sunset Orange Hoodie', 
    price: 799, 
    image: 'hoodie12.jpeg',
    colors: ['orange'],
    sizes: ['S', 'M', 'L'],
    material: '100% Premium Cotton, 320 GSM',
    description: 'Warm and vibrant sunset orange hoodie. Perfect for making a statement while staying comfortable.',
    featured: true,
    rating: 4.8,
    reviews: 58,
    inStock: true
  },
  { 
    id: 13, 
    name: 'Maroon Premium Hoodie', 
    price: 699, 
    image: 'hoodie13.jpeg',
    colors: ['maroon'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Premium Cotton, 350 GSM',
    description: 'A sophisticated maroon hoodie with premium details. Features an extra soft interior for maximum comfort.',
    featured: false,
    rating: 4.9,
    reviews: 76,
    inStock: true
  },
  { 
    id: 14, 
    name: 'Olive Green Hoodie', 
    price: 799, 
    image: 'hoodie14.jpeg',
    colors: ['green'],
    sizes: ['M', 'L', 'XL'],
    material: '80% Cotton, 20% Polyester, 300 GSM',
    description: 'An understated olive green hoodie for versatile styling. Features a modern cut with quality finishes.',
    featured: false,
    rating: 4.7,
    reviews: 62,
    inStock: true
  },
  { 
    id: 15, 
    name: 'Electric Blue Hoodie', 
    price: 699, 
    image: 'hoodie15.jpeg',
    colors: ['blue'],
    sizes: ['S', 'M', 'L'],
    material: '100% Premium Cotton, 320 GSM',
    description: 'Make a statement with this vibrant electric blue hoodie. Features a comfortable fit and premium cotton construction.',
    featured: true,
    rating: 4.8,
    reviews: 49,
    inStock: true
  }
];

// Global state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
let filters = {
  priceMax: 1000,
  colors: [],
  activePage: 1,
  itemsPerPage: 6,
  sortBy: 'default'
};

// Initialize on document ready
document.addEventListener('DOMContentLoaded', () => {
  // Preload images early
  preloadHoodieImages();
  
  // Initialize Dark Mode
  initializeDarkMode();
  
  // Setup all event listeners
  setupEventListeners();
  
  // Add Quick View buttons to all product cards
  document.querySelectorAll('.product-card').forEach(card => {
    const productId = parseInt(card.dataset.id || card.dataset.productId);
    if (productId) {
      addQuickViewButton(card, productId);
    }
  });
  
  // Initialize UI
  updateCartCounter();
  displayProducts();
  displayFeaturedProducts();
  initializeRecentlyViewed();
  
  // Initialize range slider
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  
  if (priceRange && priceValue) {
    priceRange.addEventListener('input', () => {
      priceValue.textContent = `₹${priceRange.value}`;
      filters.priceMax = parseInt(priceRange.value);
    });
  }
  
  // Initialize color options
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      option.classList.toggle('selected');
      
      const color = option.dataset.color;
      if (filters.colors.includes(color)) {
        filters.colors = filters.colors.filter(c => c !== color);
      } else {
        filters.colors.push(color);
      }
    });
  });
  
  // Initialize image error handling
  initializeImageErrorHandling();
});

// Setup Event Listeners
function setupEventListeners() {
  // Load more button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      filters.activePage++;
      displayProducts(true);
    });
  }
  
  // Newsletter subscription
  const newsletterSubmit = document.getElementById('newsletter-submit');
  if (newsletterSubmit) {
    newsletterSubmit.addEventListener('click', handleNewsletterSubmit);
  }
  
  // Search functionality
  const searchButton = document.getElementById('searchButton');
  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }
  
  // Search input enter key
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  // Quick view buttons - these will be added dynamically to product cards
  document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('quick-view-btn')) {
      const productId = parseInt(e.target.dataset.id);
      openQuickView(productId);
    }
  });
  
  // Initialize tooltips
  initializeTooltips();
  
  // Initialize image error handling
  initializeImageErrorHandling();
}

// Toggle menu visibility
function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  if (menu) {
    menu.classList.toggle('visible');
  }
}

// Toggle search overlay
function toggleSearch() {
  const searchOverlay = document.getElementById('searchOverlay');
  if (searchOverlay) {
    searchOverlay.classList.toggle('visible');
    
    if (searchOverlay.classList.contains('visible')) {
      document.getElementById('searchInput').focus();
    }
  }
}

// Perform search
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  const query = searchInput.value.trim().toLowerCase();
  if (query === '') return;
  
  // Filter products by search query
  const searchResults = products.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query) ||
    product.colors.some(color => color.toLowerCase().includes(query))
  );
  
  // Display search results
  displaySearchResults(searchResults, query);
  
  // Close search overlay
  toggleSearch();
}

// Display search results
function displaySearchResults(results, query) {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  
  // Clear existing products
  productGrid.innerHTML = '';
  
  // Update section title
  const sectionTitle = document.querySelector('.section-title');
  if (sectionTitle) {
    sectionTitle.textContent = `Search Results for "${query}"`;
  }
  
  // Show empty state if no results
  if (results.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>We couldn't find any products matching "${query}". Try a different search term or browse our collection.</p>
        <button class="reset-filters-btn" onclick="window.location.reload()">View All Products</button>
      </div>
    `;
    return;
  }
  
  // Create product cards for search results
  results.forEach(product => {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <button class="wishlist-btn" data-id="${product.id}" onclick="toggleWishlist(${product.id})">
          <i class="fas ${isWishlisted ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="rating">
          ${getStarRating(product.rating)} <span>(${product.reviews})</span>
        </div>
        <p class="product-price">₹${product.price}</p>
        <div class="button-container">
          <button class="detail-link" onclick="viewDetails(${product.id})">View Details</button>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    
    productGrid.appendChild(productCard);
  });
}

// Toggle filter panel
function toggleFilters() {
  const filterPanel = document.getElementById('filterPanel');
  if (filterPanel) {
    filterPanel.classList.toggle('hidden');
  }
}

// Apply price and color filters
function applyFilters() {
  filters.activePage = 1;
  displayProducts();
  toggleFilters();
}

// Reset all filters
function resetFilters() {
  filters.priceMax = 1000;
  filters.colors = [];
  filters.activePage = 1;
  filters.sortBy = 'default';
  
  // Reset UI elements
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  const sortOptions = document.getElementById('sortOptions');
  
  if (priceRange) priceRange.value = 1000;
  if (priceValue) priceValue.textContent = '₹1000';
  if (sortOptions) sortOptions.value = 'default';
  
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.classList.remove('selected');
  });
  
  // Apply reset
  displayProducts();
  toggleFilters();
}

// Sort products
function sortProducts() {
  const sortSelect = document.getElementById('sortOptions');
  if (sortSelect) {
    filters.sortBy = sortSelect.value;
    filters.activePage = 1;
    displayProducts();
  }
}

// Filter products based on current filter settings
function getFilteredProducts() {
  let filtered = [...products];
  
  // Filter by price
  filtered = filtered.filter(product => product.price <= filters.priceMax);
  
  // Filter by colors
  if (filters.colors.length > 0) {
    filtered = filtered.filter(product => {
      return product.colors.some(color => filters.colors.includes(color));
    });
  }
  
  // Sort products
  switch (filters.sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      // Default sorting (featured first, then by id)
      filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
      });
  }
  
  return filtered;
}

// Display products with pagination
function displayProducts(append = false) {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  
  if (!append) {
    productGrid.innerHTML = '';
  }
  
  const filteredProducts = getFilteredProducts();
  
  if (filteredProducts.length === 0) {
    // Show "No products found" message
    const noProducts = document.createElement('div');
    noProducts.className = 'no-products-message';
    noProducts.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No products match your criteria</h3>
        <p>Try adjusting your filters or search terms.</p>
        <button onclick="resetFilters()" class="reset-filters-btn">Reset Filters</button>
      </div>
    `;
    productGrid.appendChild(noProducts);
    return;
  }
  
  const startIndex = append ? productGrid.children.length : 0;
  const endIndex = Math.min(startIndex + filters.itemsPerPage, filteredProducts.length);
  
  for (let i = startIndex; i < endIndex; i++) {
    const product = filteredProducts[i];
    
    // Ensure product has all necessary properties
    const safeProduct = {
      id: product.id || i + 1,
      name: product.name || 'Product Name',
      price: product.price || 699,
      image: product.image || `hoodie${(i % 11) + 1}.jpeg`,
      colors: product.colors || ['black'],
      sizes: product.sizes || ['M'],
      rating: product.rating || 4.0,
      reviews: product.reviews || 0
    };
    
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.price = safeProduct.price;
    productCard.dataset.color = safeProduct.colors.join(',');
    productCard.dataset.id = safeProduct.id;
    
    // Add animation attributes for filtering
    productCard.dataset.aos = 'fade-up';
    productCard.dataset.aosDelay = (i % 4) * 100;
    
    // Check if product is in wishlist
    const isWishlisted = wishlist.some(item => item.id === safeProduct.id);
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${safeProduct.image}" alt="${safeProduct.name}" loading="lazy">
        <button class="wishlist-btn" data-id="${safeProduct.id}" onclick="toggleWishlist(${safeProduct.id})">
          <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <h3>${safeProduct.name}</h3>
        <div class="rating">
          ${getStarRating(safeProduct.rating)}
          <span>(${safeProduct.reviews})</span>
        </div>
        <div class="product-price">₹${safeProduct.price}</div>
        <div class="button-container">
          <button class="detail-link" onclick="viewDetails(${safeProduct.id})">View Details</button>
          <button class="add-to-cart-btn" onclick="addToCart(${safeProduct.id})">Add to Cart</button>
        </div>
      </div>
    `;
    
    productGrid.appendChild(productCard);
    
    // Add Quick View button
    addQuickViewButton(productCard, safeProduct.id);
  }
  
  // Check if we need to show or hide the load more button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = endIndex < filteredProducts.length ? 'block' : 'none';
  }
}

// Display featured products
function displayFeaturedProducts() {
  const featuredCarousel = document.querySelector('.featured-carousel');
  if (!featuredCarousel) return;
  
  // Get featured products
  const featuredProducts = products.filter(product => product.featured);
  
  // Create product cards
  featuredProducts.forEach(product => {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <button class="wishlist-btn" data-id="${product.id}" onclick="toggleWishlist(${product.id})">
          <i class="fas ${isWishlisted ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="rating">
          ${getStarRating(product.rating)} <span>(${product.reviews})</span>
        </div>
        <p class="product-price">₹${product.price}</p>
        <div class="button-container">
          <button class="detail-link" onclick="viewDetails(${product.id})">View Details</button>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    
    featuredCarousel.appendChild(productCard);
  });
}

// Initialize recently viewed section
function initializeRecentlyViewed() {
  const recentlyViewedGrid = document.querySelector('.recently-viewed-grid');
  const recentlyViewedSection = document.getElementById('recentlyViewed');
  
  if (!recentlyViewedGrid || !recentlyViewedSection) return;
  
  // Hide section if no recently viewed products
  if (recentlyViewed.length === 0) {
    recentlyViewedSection.style.display = 'none';
    return;
  }
  
  // Show section and display products
  recentlyViewedSection.style.display = 'block';
  
  // Create product cards
  recentlyViewed.slice(0, 4).forEach(productId => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const isWishlisted = wishlist.some(item => item.id === product.id);
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <button class="wishlist-btn" data-id="${product.id}" onclick="toggleWishlist(${product.id})">
          <i class="fas ${isWishlisted ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-price">₹${product.price}</p>
        <div class="button-container">
          <button class="detail-link" onclick="viewDetails(${product.id})">View Details</button>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    
    recentlyViewedGrid.appendChild(productCard);
  });
}

// Add product to recently viewed
function addToRecentlyViewed(productId) {
  // Remove if already in list
  recentlyViewed = recentlyViewed.filter(id => id !== productId);
  
  // Add to front of array
  recentlyViewed.unshift(productId);
  
  // Limit to 10 items
  recentlyViewed = recentlyViewed.slice(0, 10);
  
  // Save to localStorage
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
}

// Toggle product in wishlist
function toggleWishlist(productId) {
  const exists = wishlist.some(item => item.id === productId);
  
  if (exists) {
    wishlist = wishlist.filter(item => item.id !== productId);
  } else {
    const product = products.find(p => p.id === productId);
    if (product) {
      wishlist.push({ id: productId, dateAdded: new Date() });
      
      // Show toast notification
      showToast(`${product.name} added to wishlist!`);
    }
  }
  
  // Save to localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
  // Update UI
  const wishlistBtns = document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`);
  wishlistBtns.forEach(btn => {
    const icon = btn.querySelector('i');
    if (exists) {
      icon.classList.remove('fa-heart');
      icon.classList.add('fa-heart-o');
    } else {
      icon.classList.remove('fa-heart-o');
      icon.classList.add('fa-heart');
    }
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ 
      id: productId, 
      quantity: 1, 
      name: product.name,
      price: product.price,
      image: product.image
    });
  }
  
  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Update UI
  updateCartCounter();
  
  // Show toast notification
  showToast(`${product.name} added to cart!`);
}

// Navigate to product details page
function viewDetails(productId) {
  // Add to recently viewed
  addToRecentlyViewed(productId);
  
  // Navigate to product details page
  window.location.href = `hoodie-detail.html?id=${productId}`;
}

// Update cart counter
function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (!cartCounter) return;
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCounter.textContent = totalItems;
  
  // Add animation class
  cartCounter.classList.add('bump');
  setTimeout(() => {
    cartCounter.classList.remove('bump');
  }, 300);
}

// Display cart items
function displayCart() {
  const cartContainer = document.getElementById('cartContainer');
  const totalPriceElement = document.getElementById('totalPrice');
  if (!cartContainer || !totalPriceElement) return;
  
  // Clear the cart container
  cartContainer.innerHTML = '';
  
  // Check if cart is empty
  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <a href="index.html" class="cta-button primary">Start Shopping</a>
      </div>
    `;
    totalPriceElement.textContent = 'Total: ₹0';
    return;
  }
  
  // Calculate total
  let total = 0;
  
  // Create cart items
  cart.forEach(item => {
    total += item.price * item.quantity;
    
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p class="item-price">₹${item.price}</p>
      </div>
      <div class="quantity-control">
        <button onclick="decreaseQuantity(${item.id})">-</button>
        <span id="quantity-${item.id}">${item.quantity}</span>
        <button onclick="increaseQuantity(${item.id})">+</button>
      </div>
      <div class="item-total">₹${item.price * item.quantity}</div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">
        <i class="fas fa-trash"></i>
      </button>
    `;
    
    cartContainer.appendChild(cartItem);
  });
  
  // Update total price
  totalPriceElement.textContent = `Total: ₹${total}`;
}

// Increase quantity of an item in the cart
function increaseQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCounter();
  }
}

// Decrease quantity of an item in the cart
function decreaseQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCounter();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
  updateCartCounter();
  
  // Show toast notification
  const product = products.find(p => p.id === productId);
  if (product) {
    showToast(`${product.name} removed from cart!`);
  }
}

// Newsletter subscription handler
function handleNewsletterSubmit() {
  const emailInput = document.getElementById('newsletter-email');
  const messageDiv = document.getElementById('newsletter-message');
  
  if (!emailInput || !messageDiv) return;
  
  const email = emailInput.value.trim();
  
  // Simple validation
  if (!email || !email.includes('@')) {
    messageDiv.innerHTML = '<span class="error-message">Please enter a valid email address</span>';
    return;
  }
  
  // Simulate successful submission
  messageDiv.innerHTML = '<span class="success-message">Thank you for subscribing!</span>';
  emailInput.value = '';
  
  // Reset message after 3 seconds
  setTimeout(() => {
    messageDiv.innerHTML = '';
  }, 3000);
}

// Show toast notification
function showToast(message, duration = 3000) {
  // Check if toast container exists, create if not
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.classList.add('toast-container');
    document.body.appendChild(toastContainer);
    
    // Add toast container styles
    const style = document.createElement('style');
    style.innerHTML = `
      .toast-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      
      .toast {
        background-color: rgba(42, 57, 144, 0.9);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        font-size: 0.9rem;
        max-width: 300px;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
      }
      
      .toast.visible {
        transform: translateX(0);
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;
  
  // Add to container
  toastContainer.appendChild(toast);
  
  // Animation timing
  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);
  
  // Auto remove after duration
  setTimeout(() => {
    toast.classList.remove('visible');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// Helper function to render star rating
function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  let stars = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  
  // Half star
  if (halfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  
  return stars;
}

// Initialize cart display if on the cart page
if (document.getElementById('cartContainer')) {
  displayCart();
}

// Create and add Quick View button to product cards
function addQuickViewButton(productCard, productId) {
  const quickViewBtn = document.createElement('button');
  quickViewBtn.className = 'quick-view-btn';
  quickViewBtn.dataset.id = productId;
  quickViewBtn.innerHTML = '<i class="fas fa-eye"></i>';
  quickViewBtn.title = 'Quick View';
  
  // Add tooltip to the button
  quickViewBtn.dataset.tooltip = 'Quick View';
  
  productCard.querySelector('.product-image').appendChild(quickViewBtn);
}

// Quick View functionality
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Set product details in quick view modal
  document.getElementById('quickViewTitle').textContent = product.name;
  document.getElementById('quickViewImage').src = product.image;
  document.getElementById('quickViewImage').alt = product.name;
  document.getElementById('quickViewRating').innerHTML = getStarRating(product.rating) + ` <span>(${product.reviews} reviews)</span>`;
  document.getElementById('quickViewPrice').textContent = `₹${product.price}`;
  document.getElementById('quickViewDescription').textContent = product.description;
  
  // Initialize color options
  const quickViewColors = document.getElementById('quickViewColors');
  quickViewColors.innerHTML = '';
  
  if (product.colors && product.colors.length > 0) {
    product.colors.forEach(color => {
      const colorOption = document.createElement('div');
      colorOption.classList.add('color-option');
      colorOption.dataset.color = color;
      colorOption.style.backgroundColor = color;
      
      // Add border for white color
      if (color === 'white') {
        colorOption.style.border = '1px solid #ddd';
      }
      
      quickViewColors.appendChild(colorOption);
    });
    
    // Add click handler for color options
    const colorOptions = quickViewColors.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
      });
    });
    
    // Auto-select first color
    if (colorOptions.length > 0) {
      colorOptions[0].classList.add('selected');
    }
  }
  
  // Initialize size options
  const quickViewSizes = document.getElementById('quickViewSizes');
  quickViewSizes.innerHTML = '';
  
  if (product.sizes && product.sizes.length > 0) {
    product.sizes.forEach(size => {
      const sizeOption = document.createElement('div');
      sizeOption.classList.add('size-option');
      sizeOption.dataset.size = size;
      sizeOption.textContent = size;
      
      quickViewSizes.appendChild(sizeOption);
    });
    
    // Add click handler for size options
    const sizeOptions = quickViewSizes.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
      option.addEventListener('click', () => {
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
      });
    });
    
    // Auto-select first size
    if (sizeOptions.length > 0) {
      sizeOptions[0].classList.add('selected');
    }
  }
  
  // Reset quantity
  document.getElementById('quickViewQuantity').textContent = '1';
  
  // Set up buttons
  document.getElementById('quickViewAddToCart').onclick = () => {
    // Get selected options
    const selectedColor = quickViewColors.querySelector('.color-option.selected')?.dataset.color;
    const selectedSize = quickViewSizes.querySelector('.size-option.selected')?.dataset.size;
    const quantity = parseInt(document.getElementById('quickViewQuantity').textContent);
    
    // Add to cart with options
    addToCartWithOptions(productId, selectedColor, selectedSize, quantity);
    
    // Close modal
    closeModal('quickViewModal');
  };
  
  document.getElementById('quickViewDetails').onclick = () => {
    viewDetails(productId);
  };
  
  // Open modal
  openModal('quickViewModal');
  
  // Add to recently viewed
  addToRecentlyViewed(productId);
}

// Add to cart with selected options
function addToCartWithOptions(productId, color, size, quantity) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Check if color and size are selected when required
  if (product.colors && product.colors.length > 0 && !color) {
    showToast('Please select a color');
    return;
  }
  
  if (product.sizes && product.sizes.length > 0 && !size) {
    showToast('Please select a size');
    return;
  }
  
  // Check if item with same options exists in cart
  const existingItemIndex = cart.findIndex(item => 
    item.id === productId && 
    item.color === color && 
    item.size === size
  );
  
  if (existingItemIndex !== -1) {
    // Update quantity if item exists
    cart[existingItemIndex].quantity += quantity || 1;
  } else {
    // Add new item if it doesn't exist
    cart.push({ 
      id: productId, 
      color: color,
      size: size,
      quantity: quantity || 1, 
      name: product.name,
      price: product.price,
      image: product.image
    });
  }
  
  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Update UI
  updateCartCounter();
  
  // Show toast notification
  showToast(`${product.name} added to cart!`);
}

// Quick View quantity controls
function increaseQuickViewQuantity() {
  const quantityElement = document.getElementById('quickViewQuantity');
  if (quantityElement) {
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
  }
}

function decreaseQuickViewQuantity() {
  const quantityElement = document.getElementById('quickViewQuantity');
  if (quantityElement) {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  }
}

// Modal open/close functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Tab switching function for size guide
function switchTab(button, tabId) {
  // Update buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  
  // Update tab content
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Dark Mode
function initializeDarkMode() {
  // Check for saved dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  // Apply dark mode if saved
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon(true);
  }
}

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  
  // Update icon
  updateDarkModeIcon(isDarkMode);
  
  // Save preference
  localStorage.setItem('darkMode', isDarkMode);
  
  // Show toast
  showToast(isDarkMode ? 'Dark mode enabled' : 'Light mode enabled');
}

function updateDarkModeIcon(isDarkMode) {
  const icon = document.querySelector('#darkModeToggle i');
  if (icon) {
    if (isDarkMode) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
}

// Tooltip functionality
function initializeTooltips() {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', showTooltip);
    element.addEventListener('mouseleave', hideTooltip);
  });
}

function showTooltip(e) {
  const tooltipText = e.target.dataset.tooltip;
  
  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = tooltipText;
  
  // Add to DOM
  document.body.appendChild(tooltip);
  
  // Position the tooltip
  const rect = e.target.getBoundingClientRect();
  tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
  tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
  
  // Store reference to the tooltip in the element
  e.target._tooltip = tooltip;
  
  // Show with a small delay
  setTimeout(() => {
    tooltip.classList.add('visible');
  }, 10);
}

function hideTooltip(e) {
  if (e.target._tooltip) {
    e.target._tooltip.classList.remove('visible');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      if (e.target._tooltip && e.target._tooltip.parentNode) {
        e.target._tooltip.parentNode.removeChild(e.target._tooltip);
      }
      e.target._tooltip = null;
    }, 300);
  }
}

// Ensure images don't appear blank by providing fallbacks
function initializeImageErrorHandling() {
  // Handle all images across the site
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', function() {
        // Get the source filename
        const srcPath = this.src;
        const filename = srcPath.substring(srcPath.lastIndexOf('/') + 1);
        
        // Check if we have a fallback for this file
        if (MEDIA_FALLBACKS[filename]) {
          this.src = MEDIA_FALLBACKS[filename];
        } else if (this.src.includes('hoodie')) {
          // For product images, use the existing hoodie images as fallbacks
          const availableHoodies = Object.keys(MEDIA_FALLBACKS).filter(key => key.includes('hoodie'));
          if (availableHoodies.length > 0) {
            // Select a random hoodie image from our available ones
            const randomHoodie = availableHoodies[Math.floor(Math.random() * availableHoodies.length)];
            this.src = MEDIA_FALLBACKS[randomHoodie];
          }
        } else if (this.classList.contains('thumbnail') || 
                  this.classList.contains('fit-type-img') || 
                  this.src.includes('measure')) {
          // For thumbnails, fit guide images, and measurement images
          this.src = MEDIA_FALLBACKS['hoodie' + (Math.floor(Math.random() * 11) + 1) + '.jpeg'];
        } else if (this.parentElement && this.parentElement.classList.contains('review-avatar')) {
          // If it's an avatar in reviews, just hide it
          this.style.display = 'none';
        } else {
          // For any other images, use a general fallback
          this.src = MEDIA_FALLBACKS['hoodie1.jpeg'] || 'https://res.cloudinary.com/demo/image/upload/v1579702300/samples/ecommerce/leather-bag-gray.jpg';
        }
        
        // Add appropriate styling to ensure the fallback looks good
        this.style.objectFit = 'cover';
        console.log('Applied fallback image for:', this.alt || 'unnamed image');
      });
    });
  });
}

// Preload all hoodie images
function preloadHoodieImages() {
  console.log('Preloading hoodie images...');
  const availableHoodies = [
    'hoodie1.jpeg', 'hoodie2.jpeg', 'hoodie3.jpeg', 'hoodie4.jpeg', 
    'hoodie5.jpeg', 'hoodie6.jpeg', 'hoodie7.jpeg', 'hoodie8.jpeg', 
    'hoodie9.jpeg', 'hoodie10.jpeg', 'hoodie11.jpeg'
  ];
  
  availableHoodies.forEach(src => {
    const img = new Image();
    img.src = src;
    img.onload = () => console.log(`Preloaded: ${src}`);
    img.onerror = () => console.warn(`Failed to preload: ${src}`);
  });
}
