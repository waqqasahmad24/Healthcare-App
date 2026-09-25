document.addEventListener("DOMContentLoaded", () => {
    // 1. Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const productId = params.get("id");

    if (!category || !productId) {
        // Missing parameters, redirect back home safely
        window.location.href = "../home.html";
        return;
    }

    // Map URL category keys to clean user-facing titles
    const categoryTitles = {
        "multivitamins": "Advanced Multivitamins",
        "clinical-syrups": "Clinical Syrups",
        "protein-bars": "Protein Bars",
        "specialty-supplements": "Specialty Supplements"
    };

    const cleanCategoryTitle = categoryTitles[category] || "Products";

    // 2. Dynamically load the category's JS script to retrieve its dataset
    const script = document.createElement("script");
    script.src = `../js/${category}.js`;
    script.onload = () => {
        // Validate that products data loaded successfully
        if (!window.categoryProducts) {
            console.error("Product catalog failed to load.");
            window.location.href = "../home.html";
            return;
        }

        // Find product by id
        const product = window.categoryProducts.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found in catalog.");
            window.location.href = "../home.html";
            return;
        }

        // Render product details
        renderProductDetails(product, category, cleanCategoryTitle);
    };
    script.onerror = () => {
        console.error("Failed to load category database.");
        window.location.href = "../home.html";
    };
    document.body.appendChild(script);
});

// 3. Render Product details inside the DOM
function renderProductDetails(product, category, cleanCategoryTitle) {
    // Breadcrumbs
    const bcCategory = document.getElementById("breadcrumbCategory");
    const bcProduct = document.getElementById("breadcrumbProduct");
    if (bcCategory) {
        bcCategory.textContent = cleanCategoryTitle;
        bcCategory.href = `../categories/${category}.html`;
    }
    if (bcProduct) {
        bcProduct.textContent = product.name;
    }

    // Direct back button link
    const backBtn = document.getElementById("backToCategoryBtn");
    if (backBtn) {
        backBtn.href = `../categories/${category}.html`;
    }

    // Meta details & Headings
    document.title = `${product.name} - Human Care Labs`;
    const image = document.getElementById("productImage");
    const title = document.getElementById("productTitle");
    const price = document.getElementById("productPrice");
    const desc = document.getElementById("productDescription");
    const badge = document.getElementById("productBadge");

    if (image) {
        image.src = product.image;
        image.alt = product.name;
    }
    if (title) title.textContent = product.name;
    if (price) price.textContent = product.price;
    if (desc) desc.textContent = product.longDescription || product.description;

    // Set custom badge details based on product specs or category
    if (badge) {
        if (product.specifications && product.specifications["Certification"]) {
            badge.textContent = product.specifications["Certification"].split(",")[0];
        } else {
            badge.textContent = "GMP Standardized";
        }
    }

    // Key Benefits
    const benefitsList = document.getElementById("benefitsList");
    if (benefitsList) {
        benefitsList.innerHTML = product.benefits.map(benefit => `
            <li>${benefit}</li>
        `).join('');
    }

    // Active Ingredients Table
    const ingredientsBody = document.getElementById("ingredientsBody");
    if (ingredientsBody) {
        ingredientsBody.innerHTML = product.ingredients.map(ing => `
            <tr>
                <td>${ing.name}</td>
                <td class="amount-col">${ing.amount}</td>
            </tr>
        `).join('');
    }

    // Dosage Callout Text
    const dosageText = document.getElementById("dosageText");
    if (dosageText) {
        dosageText.textContent = product.dosage;
    }

    // Specifications Table
    const specificationsBody = document.getElementById("specificationsBody");
    if (specificationsBody) {
        specificationsBody.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
            <tr>
                <td class="label-col">${key}</td>
                <td>${value}</td>
            </tr>
        `).join('');
    }

    // 4. Quantity Adjustments logic
    const qtyInput = document.getElementById("qtyInput");
    const qtyPlus = document.getElementById("qtyPlus");
    const qtyMinus = document.getElementById("qtyMinus");

    if (qtyInput && qtyPlus && qtyMinus) {
        qtyPlus.addEventListener("click", () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val < 99) {
                qtyInput.value = val + 1;
            }
        });

        qtyMinus.addEventListener("click", () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) {
                qtyInput.value = val - 1;
            }
        });
    }

    // 5. Add to Cart action handler
    const addToCartBtn = document.getElementById("addToCartBtn");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            const quantity = parseInt(qtyInput.value) || 1;
            if (typeof window.addToCart === "function") {
                window.addToCart(product, quantity);
            } else {
                showAddToCartToast(product.name, quantity);
            }
        });
    }
}

// 6. Custom premium sliding Toast notification
function showAddToCartToast(productName, quantity) {
    const toastContainer = document.getElementById("toastContainer");
    if (!toastContainer) return;

    // Create toast card element
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <div class="toast-icon">✔</div>
        <div class="toast-content">
            <h4>Added to Cart</h4>
            <p>${quantity}x ${productName} added to checkout.</p>
        </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger sliding animation
    setTimeout(() => {
        toast.classList.add("show");
    }, 50);

    // Fade out and remove element after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        // Remove from DOM after transition completes
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}
