document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const signUpButton = document.querySelector(".form button");

    signUpButton.addEventListener("click", (e) => {
        e.preventDefault();
        const fullName = form.querySelector('input[placeholder="Full Name"]').value;
        const email = form.querySelector('input[placeholder="Email"]').value;
        const password = form.querySelector('input[placeholder="Password"]').value;

        // Save user details in localStorage
        if (fullName && email && password) {
            localStorage.setItem("userFullName", fullName);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Account created successfully!");
            window.location.href = "login.html";
        } else {
            alert("Please fill in all required fields.");
        }
    });
});

// For the login functionality in `login.html`, you can add this script:

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".form button");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.querySelector('input[placeholder="Email"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;

        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            // Redirect to the homepage or another page
            window.location.href = "login.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});


