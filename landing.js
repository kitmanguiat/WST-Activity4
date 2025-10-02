$(document).ready(function () {
  let user = sessionStorage.getItem("loggedInUser");
  if (!user) {
    alert("⚠️ You must log in first!");
    window.location.href = "login.html";
  } else {
    $("#welcomeMsg").text("Welcome, " + user + "!");
  }

  $("#logoutBtn").click(function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });
});
