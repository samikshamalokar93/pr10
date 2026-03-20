function validate() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if (username === "") {
        alert("Please enter username");
        return false;
    }

    if (password === "") {
        alert("Please enter password");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Login Successful ✅");
    return true;
}