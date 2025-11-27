document.getElementById('submitButton').onclick = function() {
  const username = document.getElementById('usernameField').value.trim();
  const email = document.getElementById('emailField').value.trim();
  const phone = document.getElementById('phonenumberField').value.trim();
  const password = document.getElementById('passwordField').value.trim();

  // Validation checks
  if (!username) {
    alert("Username cannot be empty");
  } else if (!email || !email.endsWith("@gmail.com")) {
    alert("Please enter a valid Gmail address");
  } else if (!phone || phone.length !== 13 || !/^\d+$/.test(phone)) {
    alert("Phone number must be exactly 13 digits");
  } else if (!password || password.length < 6 || password.length > 12) {
    alert("Password must be 6-12 characters long");
  } else {
    alert("Form submitted successfully!");
  }

  // Reset fields
  document.getElementById('usernameField').value = "";
  document.getElementById('emailField').value = "";
  document.getElementById('phonenumberField').value = "";
  document.getElementById('passwordField').value = "";
};