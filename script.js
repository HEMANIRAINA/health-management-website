$(document).ready(function () {
  // BMI Form
  $("#bmiForm").on("submit", function (e) {
    e.preventDefault();
    const weight = parseFloat($("#weight").val());
    const height = parseFloat($("#height").val());
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      $("#bmiResult").text("Please enter valid positive numbers for weight and height.");
      return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    $("#bmiResult").text(`Your BMI is ${bmi}`);
  });

  // Navbar highlighting
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});
