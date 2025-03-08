# HoodUp React Component Structure

## Core Components

### Layout Components
- `App.js` - Main application container
- `Header.js` - Site header with navigation, search, and cart
- `Footer.js` - Site footer with links and newsletter signup
- `Navigation.js` - Main navigation menu
- `Sidebar.js` - Filters sidebar for product listings

### Page Components
- `HomePage.js` - Landing page with hero section and featured products
- `ProductsPage.js` - Browsable product catalog with filters
- `ProductDetailPage.js` - Detailed product view
- `CartPage.js` - Shopping cart and checkout initiation
- `CheckoutPage.js` - Multi-step checkout process
- `AccountPage.js` - User account management
- `WishlistPage.js` - User's saved product wishlist
- `OrdersPage.js` - Order history and tracking

### Reusable UI Components
- `ProductCard.js` - Individual product display card
- `Button.js` - Customizable button component
- `Modal.js` - Reusable modal dialog
- `Carousel.js` - Image and product carousel
- `Accordion.js` - Collapsible content sections
- `Tabs.js` - Tabbed interface component
- `Toast.js` - Notification toast messages
- `Loader.js` - Loading spinner/indicator
- `Breadcrumbs.js` - Page navigation breadcrumbs
- `Pagination.js` - Results pagination control
- `Rating.js` - Star rating display and input
- `ColorPicker.js` - Product color variant selector
- `SizeSelector.js` - Product size selector
- `QuantityPicker.js` - Quantity adjustment component

### Form Components
- `SearchBar.js` - Product search with auto-suggestions
- `FilterGroup.js` - Product filtering controls
- `SortSelector.js` - Product sorting controls
- `LoginForm.js` - User login form
- `SignupForm.js` - New user registration form
- `AddressForm.js` - Shipping/billing address form
- `PaymentForm.js` - Payment method form
- `ReviewForm.js` - Product review submission form

## Context Providers
- `ThemeProvider.js` - Light/dark mode theming
- `AuthProvider.js` - Authentication state
- `CartProvider.js` - Shopping cart state
- `WishlistProvider.js` - Wishlist state
- `ProductProvider.js` - Product data and filtering logic

## Custom Hooks
- `useProducts.js` - Product fetching and filtering
- `useCart.js` - Cart operations
- `useWishlist.js` - Wishlist operations
- `useAuth.js` - Authentication operations
- `useLocalStorage.js` - Local storage persistence
- `useWindowSize.js` - Responsive design helper
- `useScrollPosition.js` - Scroll-based effects 