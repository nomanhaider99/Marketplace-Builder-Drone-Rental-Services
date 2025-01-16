# System Architecture

This document outlines the system's workflow, highlighting how products are fetched, added to the cart, checked out, and tracked.

---

## **1. Fetch Products from Sanity and Display on Frontend**  
In this design, the flow demonstrates how products are transferred from the inventory to the UI.  
- A **GET** request is made to the `/products` endpoint.  
- The endpoint retrieves all products stored in the **Sanity CMS** and displays them on the frontend.  

<img src="/documentation/System Architecture Images/Product-Display.png" alt="Product Display Architecture" width="900" />

---

## **2. Add Products to Sanity and Show in Cart on Frontend**  
This diagram illustrates the workflow for the **Add to Cart** functionality.  
- When a user clicks the "Add to Cart" button on any product:  
  - A **POST** request is made to the `/orders` endpoint.  
  - The request includes product details such as `id`, `name`, `image`, `price`, and `quantity`.  
  - The data is saved in **Sanity CMS**, which will later be used during the checkout process.  

<img src="/documentation/System Architecture Images/AddToCart.png" alt="Add to Cart Architecture" width="900" />

---

## **3. Checkout and Place Order**  
This design demonstrates the checkout process.  
- During checkout, the user is prompted to provide personal information such as:  
  - Name, Address, Email, and Shipping Details.  
- A **POST** request is made to the `/checkout` endpoint.  
- This triggers another **POST** request to a third-party API (**ShipEngine**) at `https://api.shipengine.com/v1/labels`.  
- The third-party API processes the provided data and generates a shipping label for the order.  
- A receipt is returned, describing the order along with additional information.  

<img src="/documentation/System Architecture Images/Checkout.png" alt="Checkout Architecture" width="900" />

---

## **4. Track Your Order**  
Once the checkout is complete, the user is redirected to a success page featuring a **Track Your Order** button.  
- When the user clicks this button:  
  - A **GET** request is made to the `/track-order` endpoint.  
  - This triggers a **GET** request to the third-party API (**ShipEngine**) at `https://api.shipengine.com/v1/labels/[Your_LabelId]/track`.  
  - The API response provides detailed tracking information, including:  
    - `OrderStatus`, `ShippedFrom`, `ShippedTo`, `OwnerDetails`, `CurrentStatus`, etc.  

<img src="/documentation/System Architecture Images/Tracking.png" alt="Order Tracking Architecture" width="900" />

---
