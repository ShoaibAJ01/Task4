// Restaurant Signup
document.getElementById('restaurantSignupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('restaurantName').value;
    const email = document.getElementById('restaurantEmail').value;
    const password = document.getElementById('restaurantPassword').value;
    
    // Perform API request to send restaurant signup data
    // Example: fetch('/api/restaurant/signup', { method: 'POST', body: JSON.stringify({ name, email, password }) })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
});

// Customer Signup
document.getElementById('customerSignupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const password = document.getElementById('customerPassword').value;
    
    // Perform API request to send customer signup data
    // Example: fetch('/api/customer/signup', { method: 'POST', body: JSON.stringify({ name, email, password }) })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
});

// Restaurant Add Dish
document.getElementById('addDishForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dishName = document.getElementById('dishName').value;
    const description = document.getElementById('dishDescription').value;
    const price = document.getElementById('dishPrice').value;
    
    // Perform API request to add dish
    // Example: fetch('/api/restaurant/addDish', { method: 'POST', body: JSON.stringify({ dishName, description, price }) })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
});

// Customer Place Order
document.getElementById('placeOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dishName = document.getElementById('dishName').value;
    const quantity = document.getElementById('quantity').value;
    
    // Perform API request to place order
    // Example: fetch('/api/customer/placeOrder', { method: 'POST', body: JSON.stringify({ dishName, quantity }) })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
});

// Fetch and display list of restaurants
fetch('/api/restaurants')
    .then(response => response.json())
    .then(restaurants => {
        const restaurantsList = document.getElementById('restaurantsList');
        restaurants.forEach(restaurant => {
            const li = document.createElement('li');
            li.textContent = restaurant.name;
            li.addEventListener('click', function() {
                // Fetch and display available dishes for the selected restaurant
                fetch(`/api/restaurant/${restaurant.id}/dishes`)
                    .then(response => response.json())
                    .then(dishes => {
                        // Display dishes for the selected restaurant
                    })
                    .catch(error => console.error('Error:', error));
            });
            restaurantsList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));

// Fetch and display list of orders for the restaurant
fetch('/api/restaurant/orders')
    .then(response => response.json())
    .then(orders => {
        const ordersList = document.getElementById('ordersList');
        orders.forEach(order => {
            const li = document.createElement('li');
            li.textContent = `Order ID: ${order.id}, Dish: ${order.dish}, Quantity: ${order.quantity}`;
            ordersList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));
