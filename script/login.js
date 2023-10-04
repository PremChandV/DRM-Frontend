function loginValidate() {
    var userid = document.getElementById("userid").value;
    var password = document.getElementById("password").value;
    if (userid == "admin" && password == "admin@123") {
        window.location.href = "dashboard.html"; // Redirecting to dashboard page.
        alert("Login Successfully!   :-)");
        return false;
    } 
    if (userid == "member" && password == "member@123") {
        window.location.href = "member-dashboard.html"; // Redirecting to member dashboard page.
        alert("Member Login Successfully!   :-)");
        return false;
    }
    else {
        alert("User ID (or) Password doesn't match   :-(");
        window.location.href = "login.html"; // Redirecting to same login page.
    }
}


/* const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("loginSubmit");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const userid = loginForm.userid.value;
    const password = loginForm.password.value;

    if (userid === "admin" && password === "admin@123") {
        alert("Login Successfully! :-)");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}) */
