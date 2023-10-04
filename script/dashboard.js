/* function w3_open() {
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("mySidebar").style.width = "15%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
} */
// =========================================================================
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
})

const logoutButton = document.getElementById("logoutButton");
const sideNav = document.getElementById("sideNav");

// When the side navigation bar is collapsed, set the logout button position to fixed.
sideNav.addEventListener("collapsed", () => {
  logoutButton.style.position = "fixed";
  logoutButton.style.left = "20";
});

// When the side navigation bar is expanded, set the logout button position to relative.
sideNav.addEventListener("expanded", () => {
  logoutButton.style.position = "relative";
});
