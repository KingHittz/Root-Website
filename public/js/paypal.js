// Fetch PayPal Client ID from the backend
fetch("/config")
    .then(response => response.json())
    .then(data => {
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${data.clientId}`;
        script.onload = () => {
            paypal.Buttons({
                createOrder: function(data, actions) {
                    return actions.order.create({
                        purchase_units: [{
                            amount: { value: '8.99' }  // Set your price here
                        }]
                    });
                },
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(details) {
                        alert("Payment Successful! Redirecting to the invite...");
                        window.location.href = "https://yourwebsite.com/protected-page.html"; // Change this to your secret invite page
                    });
                }
            }).render("#paypal-button-container");
        };
        document.head.appendChild(script);
    })
    .catch(error => console.error("Error loading PayPal SDK:", error));
