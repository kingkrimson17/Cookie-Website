$(document).ready(function() {
    // Handle PayPal button click
    $("#paypal-button").click(function() {
        window.location.href = "https://www.paypal.com/donate/?business=your-paypal-email@example.com";
    });

    // Handle form submission with AJAX
    $("#order-form").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        let form = $(this);
        let formData = form.serialize(); // Get form data as URL-encoded string

        // Send form data to Formspree using AJAX
        $.ajax({
            url: form.attr("action"), // Formspree endpoint URL
            method: "POST",            // HTTP method (POST)
            data: formData,           // Data to send
            dataType: "json",         // Expected data format (JSON)
            success: function(response) {
                alert("Order sent successfully! We will contact you soon.");
                form.trigger("reset"); // Reset form fields
            },
            error: function() {
                alert("Error sending order. Please try again.");
            }
        });
    });
});
