document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let formIsValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (el) {
        el.textContent = "";
    });

    // Get form values
    const firstName = document.getElementById("FirstName").value.trim();
    const lastName = document.getElementById("LastName").value.trim();
    const email = document.getElementById("EMAIL").value.trim();
    const phoneNumber = document.getElementById("PHONENUMBER").value.trim();
    const address = document.getElementById("ADDRESS").value.trim();
    const city = document.getElementById("CITY").value.trim();
    const pincode = document.getElementById("PINCODE").value.trim();
    const password = document.getElementById("PASSWORD").value.trim();
    const confirmPassword = document.getElementById("CONFIRMPASSWORD").value.trim();

    // Regular expressions
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^[0-9]{10}$/;
    const pincodeRegex = /^[0-9]{6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate first name
    if (firstName.length < 3) {
        formIsValid = false;
        document.getElementById("fname-error").textContent = "First name must be at least 3 characters long";
    }

    // Validate last name
    if (lastName.length < 1) {
        formIsValid = false;
        document.getElementById("lname-error").textContent = "Last name must be at least 1 character long";
    }

    // Validate email (Gmail)
    if (!gmailRegex.test(email)) {
        formIsValid = false;
        document.getElementById("email-error").textContent = "Email must be a valid Gmail account";
    }

    // Validate phone number
    if (!phoneRegex.test(phoneNumber)) {
        formIsValid = false;
        document.getElementById("phone-error").textContent = "Phone number must be 10 digits";
    }

    // Validate address
    if (address.length < 4) {
        formIsValid = false;
        document.getElementById("address-error").textContent = "Please provide a valid address";
    }

    // Validate city
    if (city === "") {
        formIsValid = false;
        document.getElementById("city-error").textContent = "Please provide a city";
    }

    // Validate pincode
    if (!pincodeRegex.test(pincode)) {
        formIsValid = false;
        document.getElementById("pincode-error").textContent = "Pincode must be exactly 6 digits";
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        formIsValid = false;
        document.getElementById("password-error").textContent = "Password must contain at least one lowercase letter, one uppercase letter, one special character, and one number";
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        formIsValid = false;
        document.getElementById("confirm-password-error").textContent = "Passwords do not match";
    }

    // If all validations pass, submit the form
    if (formIsValid) {
        alert("Form submitted successfully!");
        // Optionally, add actual form submission logic here
    }
});