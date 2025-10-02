$(document).ready(function () {
  $("#registerForm").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        equalTo: "[name='password']"
      }
    },
    messages: {
      name: "Please enter your full name",
      email: "Enter a valid email address",
      password: {
        required: "Password is required",
        minlength: "At least 5 characters needed"
      },
      confirm_password: {
        required: "Please confirm your password",
        equalTo: "Passwords must match"
      }
    },
    submitHandler: function () {
      alert("✅ Registration successful! You can now log in.");
      window.location.href = "login.html";
    }
  });
});
