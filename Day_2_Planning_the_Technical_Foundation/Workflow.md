# Workflow Alignment - Step By Step

## How Customers Use Our Application

### 1. **SignUp**
Users can register in the application using a simple form and a `POST` API request.  
All user information will be stored in **Sanity CMS**.

### 2. **Login**
Users log into their accounts using **Auth.js**.  
When they click on "Sign In," Auth.js will handle the login process and authenticate the user to our app.

### 3. **Browse Products**
Users can view all product listings and see the details of each product.

### 4. **Add Products to Cart**
Users can add products to their cart.  
The selected quantity of each product will be added to **Sanity CMS** and displayed in the cart on the frontend.

### 5. **Checkout**
Users can proceed to checkout, fill in their information (name, email, address, shipping details, etc.), and click on "Checkout" to place their order.

### 6. **Order Tracking**
Users can track their orders by clicking the "Track Order" button on the order success page.  
They will be provided with complete information about their order.
