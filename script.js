
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

if (togglePassword && passwordField) {
    togglePassword.addEventListener("click", () => {
        const isHidden = passwordField.getAttribute("type") === "password";
        passwordField.setAttribute("type", isHidden ? "text" : "password");
    });
}

function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let cookie of cookieArr) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + "=")) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}

function removeCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
}

// Function to check token presence, corruption, and expiration
function checkTokenValidity() {
    const token = getCookie("token");
    if (!token || token === "undefined" || token === "null" || token.trim() === "") {
        return false; // Token has been removed, is missing, or is a placeholder
    }
    // Try to parse as JWT first (JWTs have 3 dot-separated parts)
    const parts = token.split('.');
    if (parts.length === 3) {
        try {
            const base64Url = parts[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const paddedBase64 = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, '=');
            const jsonPayload = decodeURIComponent(
                atob(paddedBase64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );
            const payload = JSON.parse(jsonPayload);

            // Check if JWT has an expiration claim (exp)
            if (payload && typeof payload.exp === 'number') {
                const currentTime = Math.floor(Date.now() / 1000);
                if (payload.exp < currentTime) {
                    console.warn("Token expired (JWT exp claim).");
                    return false; // Token expired
                }
            }
            return true; // Token is a valid, unexpired JWT
        } catch (error) {
            console.error("Token corruption detected during JWT parsing:", error);
            return false; // Token is corrupted
        }
    }

    // Fallback: If it's not a standard JWT but might be a mock JSON object (for testing without backend)
    try {
        const parsed = JSON.parse(token);
        if (parsed && (parsed.expiry || parsed.expiresAt || parsed.exp)) {
            const exp = parsed.expiry || parsed.expiresAt || parsed.exp;
            const currentTime = exp > 9999999999 ? Date.now() : Math.floor(Date.now() / 1000);
            if (exp < currentTime) {
                console.warn("Token expired (custom mock format).");
                return false;
            }
            return true;
        }
    } catch (e) {
        // Not a JSON object
    }

    // If it is neither a valid JWT nor a valid JSON mock, consider it corrupted/invalid
    console.warn("Token is not a valid JWT or JSON mock format. Treating as corrupted/invalid.");
    return false;
}

// Immediate Authentication Redirect Check
const path = window.location.pathname;
const currentPage = path.substring(path.lastIndexOf('/') + 1) || "index.html";
const isLoginPage = currentPage === "index.html" || currentPage === "";
const isTokenValid = checkTokenValidity();

// We check token validity on all pages except index.html (the login page)
if (!isLoginPage) {
    if (!isTokenValid) {
        removeCookie("token"); // Clean up in case of corruption/expiration
        let redirectPath = "index.html";
        if (path.includes("/categories/") || path.includes("/products/")) {
            redirectPath = "../index.html";
        }
        window.location.href = redirectPath;
    }
}

// Multi-tab storage change sync and dynamic token removal redirection
// NOTE: The native "storage" event only fires for localStorage/sessionStorage changes,
// not for cookie changes. It's left here in case other tabs still write to localStorage,
// but cookie-only token changes across tabs will instead be caught by the polling
// interval below.
window.addEventListener("storage", (e) => {
    if (e.key === "token") {
        if (!checkTokenValidity()) {
            removeCookie("token");
            let redirectPath = "index.html";
            if (window.location.pathname.includes("/categories/") || window.location.pathname.includes("/products/")) {
                redirectPath = "../index.html";
            }
            window.location.href = redirectPath;
        }
    }
});

if (!isLoginPage) {
    // Monitor token presence/validity periodically (e.g., in case of manual deletion/corruption in DevTools)
    setInterval(() => {
        if (!checkTokenValidity()) {
            removeCookie("token");
            let redirectPath = "index.html";
            if (window.location.pathname.includes("/categories/") || window.location.pathname.includes("/products/")) {
                redirectPath = "../index.html";
            }
            window.location.href = redirectPath;
        }
    }, 500);
}

// ===============================
// Registration & Login Tab Switching Logic
// ===============================
const forms = document.querySelector(".forms");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const tabSlider = document.querySelector(".tab-slider");
const formWrapper = document.querySelector(".form-wrapper");
const loginFormEl = document.querySelector(".login-form");
const registerFormEl = document.querySelector(".register-form");

function updateFormHeight() {
    if (formWrapper && loginFormEl && registerFormEl) {
        if (loginBtn.classList.contains("active-tab")) {
            formWrapper.style.height = loginFormEl.offsetHeight + "px";
        } else {
            formWrapper.style.height = registerFormEl.offsetHeight + "px";
        }
    }
}

if (registerBtn && loginBtn && forms && tabSlider) {
    setTimeout(updateFormHeight, 100);
    window.addEventListener("resize", updateFormHeight);

    registerBtn.addEventListener("click", () => {
        forms.classList.add("slide");
        tabSlider.classList.add("slide");
        loginBtn.classList.remove("active-tab");
        registerBtn.classList.add("active-tab");
        updateFormHeight();
    });

    loginBtn.addEventListener("click", () => {
        forms.classList.remove("slide");
        tabSlider.classList.remove("slide");
        registerBtn.classList.remove("active-tab");
        loginBtn.classList.add("active-tab");
        updateFormHeight();
    });
}

// ===============================
// Form Submission & API Authenticator
// ===============================
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("email"); // Maps to email input in index.html
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

function showError(msg) {
    if (message) {
        message.textContent = msg;
        message.style.display = "block";
    }
}

if (loginForm && usernameInput && passwordInput) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear any previous error messages
        if (message) {
            message.textContent = "";
            message.style.display = "none";
        }

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            showError("Please fill in all fields.");
            return;
        }

        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Invalid username or password");
                }
                return response.json();
            })
            .then(function (data) {
                if (data.token) {
                    console.log("Token Saved:", data.token);
                    // Save token in a cookie (expires in 7 days)
                    setCookie("token", data.token, 7);
                    // Redirect to Home Page
                    window.location.href = "home.html";
                } else {
                    showError("Login Failed. No token received.");
                }
            })
            .catch(function (error) {
                console.error(error);
                showError(error.message || "An error occurred during sign in.");
            });
    });
}

// ===============================
// Logout Functionality
// ===============================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        removeCookie("token");
        let redirectPath = "index.html";
        if (window.location.pathname.includes("/categories/") || window.location.pathname.includes("/products/")) {
            redirectPath = "../index.html";
        }
        window.location.href = redirectPath;
    });
}