function validateform() {
    // clear input values
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("roll-error").innerHTML = "";
    document.getElementById("mobile-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";

    // NAME
    let nameField = document.getElementById("name").value;
    let pattern0 = /^[A-Z a-z]+$/;
    if (!pattern0.test(nameField)) {
      document.getElementById("name-error").innerHTML =
        "Username should contain only alphabets.";
      return false;
    }

    // ROLL NUMBER
    let rollNumber = document.getElementById("rollNumber").value;
    let pattern1 = /^\d{3}[A-Za-z]\d[A-Za-z]\d{4}$/;

    if (!pattern1.test(rollNumber)) {
      document.getElementById("roll-error").innerText =
        "Invalid Roll Number Format: 204N1AXXXX";
      return false;
    }
    // MOBILE NUMBER
    let mobileField = document.getElementById("mobile").value;

    // pattern2=/^\d{10}$/
    pattern2 = /^[0-9]{10}$/;
    if (!pattern2.test(mobileField)) {
      document.getElementById("mobile-error").innerHTML =
        "Mobile number should contain exactly 10 digits.";
      return false;
    }

    //  PASSWORD
    passwordField = document.getElementById("passcode").value;
    pattern3 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
    if (!pattern3.test(passwordField)) {
      document.getElementById("password-error").innerHTML =
        "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, a number, and a special character.";
      return false;
    }

    return true;
  }