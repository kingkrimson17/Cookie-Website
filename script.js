$(document).ready(function() {
    // Handle PayPal button click
    $("#paypal-button").click(function() {
        window.location.href = "https://www.paypal.com/donate/?business=your-paypal-email@example.com";
    });

    // Simple form validation before submission
    $("form").submit(function(event) {
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let order = $("#order").val().trim();

        if (name === "" || email === "" || order === "") {
            alert("Please fill out all fields before submitting.");
            event.preventDefault(); // Stop form submission
        }
    });
});
