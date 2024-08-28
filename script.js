function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let department = document.getElementById("department").value;
    let address = document.getElementById("address").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    // validation for empty fields
    if (fullName === "" || email === "" || phone === "" || dob === "" || department === "" || address === "" || !gender) {
        alert("Please fill in all fields.");
        return false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone number validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    alert("Registration successful!");
    return true;
}
