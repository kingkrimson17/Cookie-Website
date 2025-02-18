$(document).ready(function() {
    let flavors = ["Chocolate Chip", "Oatmeal Raisin", "Snickerdoodle"];
    
    function updateFlavorDropdown() {
        let dropdown = $("#flavors");
        dropdown.empty();
        flavors.forEach(flavor => {
            dropdown.append(new Option(flavor, flavor));
        });
    }
    updateFlavorDropdown();

    $("#order-form").submit(function(event) {
        event.preventDefault();
        let form = $(this);
        let formData = form.serialize();
        
        $.ajax({
            url: form.attr("action"),
            method: "POST",
            data: formData,
            dataType: "json",
            success: function() {
                alert("Order sent successfully!");
                form.trigger("reset");
            },
            error: function() {
                alert("Error sending order. Please try again.");
            }
        });
    });

    $("#paypal-button").click(function() {
        window.location.href = "https://www.paypal.com/donate/?business=your-paypal-email@example.com";
    });

    $("#admin-login").click(function() {
        let password = $("#admin-password").val();
        if (password === "admin123") {
            $("#admin-controls").show();
        } else {
            alert("Incorrect password");
        }
    });

    $("#add-flavor").click(function() {
        let newFlavor = $("#new-flavor").val();
        if (newFlavor) {
            flavors.push(newFlavor);
            updateFlavorDropdown();
            $("#new-flavor").val("");
        }
    });
});
