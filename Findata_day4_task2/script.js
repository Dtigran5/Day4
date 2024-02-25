// JavaScript code for form validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name").value.trim();
    var emailInput = document.getElementById("email").value.trim();
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var isValid = true;
  
    // Validate name field
    if (nameInput === "") {
      nameError.textContent = "Please enter your name";
      isValid = false;
    } else {
      nameError.textContent = "";
    }
  
    // Validate email field
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput === "") {
      emailError.textContent = "Please enter your email address";
      isValid = false;
    } else if (!emailPattern.test(emailInput)) {
      emailError.textContent = "Please enter a valid email address";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });
  