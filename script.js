document.addEventListener("DOMContentLoaded", function() {
    let paypalButton = document.getElementById("paypal-button");

    paypalButton.addEventListener("click", function() {
        window.location.href = "https://www.paypal.com/donate/?business=your-paypal-email@example.com";
    });
});
