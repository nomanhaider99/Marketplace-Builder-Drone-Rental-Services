# System Architecture

This document describes the workflow of how products are fetched, added to the cart, checked out, and tracked.

---

## **1. Fetch Products from Sanity and Display to Frontend**  
In this design, you can see how products transfer from inventory to UI. We will have an API with a **GET** request called `/products`, which will simply return all the products saved in our **Sanity CMS**.  

<img src="/documentation/Application Architecture/Product-Display.png" alt="Alt text" width="900" />

---

## **2. Add Products to Sanity and Show in Cart on Frontend**  
This image showcases the workflow of the **Add to Cart** functionality. When a user clicks on the "Add to Cart" button of any product:  
- A **POST** request is made to the endpoint `/orders`.  
- It sends the whole information of a product, including `id`, `name`, `image`, `price`, and `quantity`.  
- The data is saved in **Sanity CMS**, which will later be used in the checkout process.  

<img src="/documentation/Application Architecture/AddToCart.png" alt="Alt text" width="900" />

---

## **3. Checkout and Place Order**  
This design shows what happens when a user checks out. When they place an order:  
- The user will be asked for information like their name, address, email, and where to ship the parcel, etc.  
- A **POST** request will be made to the endpoint `/checkout`.  
- It will call another **POST** API request to a third-party API (**ShipEngine**) at `https://api.shipengine.com/v1/labels`.  
- The data taken from the user will be sent to this third-party API, which will create a label for that particular order.  
- It will also generate a receipt describing their order along with other information.  

<img src="/documentation/Application Architecture/Checkout.png" alt="Alt text" width="900" />

---

## **4. Track Your Order**  
After successfully checking out, the user will be redirected to a success page with a button called **Track Your Order**.  
- When they click on this button:  
  - A **GET** request will be made to the endpoint `/track-order`.  
  - This will call a **GET** request to the third-party API (**ShipEngine**) at `https://api.shipengine.com/v1/labels/[Your_LabelId]/track`.  
  - It will return all information about the order, such as `OrderStatus`, `ShippedFrom`, `ShippedTo`, `OwnerDetails`, `CurrentStatus`, etc.  

<img src="/documentation/Application Architecture/Tracking.png" alt="Alt text" width="900" />


## Complete Diagram 

Eraser.io Canvas Link: https://app.eraser.io/workspace/NArJHAyTLv3D0MCX2ZZR?origin=share
