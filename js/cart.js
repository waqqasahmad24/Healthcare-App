document.addEventListener("DOMContentLoaded", () => {
    // Initialize the cart UI when the page loads
    updateCartUI();

    // Attach checkout event listener
    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", checkout);
    }
});

// Function to retrieve the cart from localStorage
function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

// Function to save the cart to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Global function to add a product to the cart
window.addToCart = function(product, quantity) {
    const cart = getCart();
    
    // Check if the product already exists in the cart
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image
        });
    }

    saveCart(cart);
    updateCartUI();

    // Optionally show a toast if available (mostly for the product detail page)
    if (typeof showAddToCartToast === "function") {
        showAddToCartToast(product.name, quantity);
    } else {
        alert(`${quantity}x ${product.name} added to cart!`);
    }
};

// Global function to remove a product from the cart
window.removeFromCart = function(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartUI();
};

// Function to update the cart badge and dropdown list
function updateCartUI() {
    const cart = getCart();
    
    // Update badge count
    const cartBadge = document.getElementById("cartBadge");
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        if (totalItems > 0) {
            cartBadge.classList.add("active");
        } else {
            cartBadge.classList.remove("active");
        }
    }

    // Update cart dropdown list
    const cartItemsList = document.getElementById("cartItemsList");
    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `<div class="empty-cart-msg">Your cart is empty.</div>`;
        } else {
            cartItemsList.innerHTML = cart.map(item => {
                // Determine relative path for image. Since image path in data might be relative to html files.
                // We'll assume the image path works from where it's called.
                return `
                    <div class="cart-item-row">
                        <div class="cart-item-img">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price-qty">
                                <span class="cart-price">${item.price}</span>
                                <span class="cart-qty">x${item.quantity}</span>
                            </div>
                        </div>
                        <button class="cart-item-delete" onclick="window.removeFromCart('${item.id}')" title="Remove item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                `;
            }).join('');
        }
    }
}

// Function to handle checkout
function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    // Determine path prefix (for pages in subdirectories)
    const pathPrefix = window.location.pathname.includes('/categories/') || window.location.pathname.includes('/products/') ? '../' : '';

    // Load checkout.css
    if (!document.getElementById("checkout-css")) {
        const link = document.createElement("link");
        link.id = "checkout-css";
        link.rel = "stylesheet";
        link.href = pathPrefix + "css/checkout.css";
        document.head.appendChild(link);
    }

    // Load checkout.js
    if (!document.getElementById("checkout-js")) {
        const script = document.createElement("script");
        script.id = "checkout-js";
        script.src = pathPrefix + "js/checkout.js";
        script.onload = () => {
            if (typeof window.openCheckoutModal === "function") {
                window.openCheckoutModal(pathPrefix);
            }
        };
        document.body.appendChild(script);
    } else {
        if (typeof window.openCheckoutModal === "function") {
            window.openCheckoutModal(pathPrefix);
        }
    }
}
