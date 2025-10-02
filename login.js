$(document).ready(function () {
  $("#loginForm").validate({
    rules: {
      username: "required",
      password: "required"
    },
    messages: {
      username: "Please enter your username",
      password: "Please enter your password"
    },
    submitHandler: function () {
      let username = $("[name='username']").val();
      let password = $("[name='password']").val();

      if (username === "admin" && password === "12345") {
        sessionStorage.setItem("loggedInUser", username);
        window.location.href = "landing.html";
      } else {
        alert("❌ Invalid username or password!");
      }
    }
  });
});
