document.addEventListener("DOMContentLoaded", () => {
    const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
    const paypalDetails = document.getElementById("paypalDetails");
    const easypaisaDetails = document.getElementById("easypaisaDetails");
    const jazzcashDetails = document.getElementById("jazzcashDetails");
    const cardDetails = document.getElementById("cardDetails");
    const cardNumber = document.getElementById("cardNumber");
    const screenshotGroup = document.getElementById("screenshotGroup");
    const paymentScreenshot = document.getElementById("paymentScreenshot");
    const paymentForm = document.getElementById("paymentForm");
    
    // Listen to changes in payment method
    paymentOptions.forEach(option => {
        option.addEventListener("change", (e) => {
            // Reset styles for all options
            document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));
            
            // Add selected style to the clicked one
            e.target.closest('.payment-option').classList.add('selected');

            const selectedMethod = e.target.value;

            // Hide all details by default
            paypalDetails.style.display = "none";
            easypaisaDetails.style.display = "none";
            jazzcashDetails.style.display = "none";
            cardDetails.style.display = "none";
            screenshotGroup.style.display = "none";
            paymentScreenshot.removeAttribute("required");
            cardNumber.removeAttribute("required");

            if (selectedMethod === "paypal") {
                paypalDetails.style.display = "block";
                screenshotGroup.style.display = "block";
                paymentScreenshot.setAttribute("required", "true");
            } else if (selectedMethod === "easypaisa") {
                easypaisaDetails.style.display = "block";
                screenshotGroup.style.display = "block";
                paymentScreenshot.setAttribute("required", "true");
            } else if (selectedMethod === "jazzcash") {
                jazzcashDetails.style.display = "block";
                screenshotGroup.style.display = "block";
                paymentScreenshot.setAttribute("required", "true");
            } else if (selectedMethod === "card") {
                cardDetails.style.display = "block";
                cardNumber.setAttribute("required", "true");
            }
        });
    });

    // Handle form submission
    if (paymentForm) {
        paymentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Verify if a method is selected
            const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
            if (!selectedMethod) {
                alert("Please select a payment method.");
                return;
            }

            // In a real application, you would handle the file upload here
            
            // Simulate successful payment processing
            alert("Order placed successfully! We have received your payment details.");
            
            // Clear cart
            localStorage.removeItem("cart");
            if (typeof updateCartUI === "function") {
                updateCartUI();
            }
            
            // Redirect to home
            window.location.href = "home.html";
        });
    }
});
