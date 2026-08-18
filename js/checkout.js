window.openCheckoutModal = function(pathPrefix = "") {
    // Check if modal already exists
    if (document.getElementById("checkoutModal")) {
        document.getElementById("checkoutModal").style.display = "flex";
        return;
    }

    // Create modal container
    const modal = document.createElement("div");
    modal.id = "checkoutModal";
    modal.className = "checkout-modal";

    // Create modal content
    modal.innerHTML = `
        <div class="checkout-modal-content">
            <span class="close-modal">&times;</span>
            <h2>Personal Details</h2>
            <form id="checkoutForm">
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="address">Shipping Address</label>
                    <textarea id="address" required rows="3"></textarea>
                </div>
                <button type="submit" class="submit-btn">Continue to Payment</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Display modal
    modal.style.display = "flex";

    // Event listeners
    const closeBtn = modal.querySelector(".close-modal");
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Click outside to close
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    const form = document.getElementById("checkoutForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        
        const personalDetails = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value
        };
        
        localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
        
        // Redirect to payment page
        window.location.href = pathPrefix + "payment.html";
    };
};
