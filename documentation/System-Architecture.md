# System Architecture

# Fetch Products from Sanity and Display to Frontend

In this Design you can see that how products transfer from inventory to UI, we will have an API with GET Request called /products which will simply return all the products saved in our sanity CMS.

<img src="/documentation/Sytem Architecture Images/Product-Display.png" alt="Alt text" width="900"  />


# Add Products to Sanity and Show in Cart on Frontend

This Image showcase the workflow of AddToCart functionality, when a user click on button add to cart of any product it will make a post request on the endpoint called /orders and send whole information of a product including id, name, image, price and quantity. and save it to Sanity CMS, that later will use in the checkout.

<img src="/documentation/Sytem Architecture Images/AddToCart.png" alt="Alt text" width="900"  />


# Checkout and place order

This design is showcasing what happen when user checkout, When he will place order, user will be asked for information like his name, address, email and where to ship a parcel etc, and a POST request will be created on endpoint called /checkout and it will call another POST API call to another Third Part API (Shipengine) to (https://api.shipengine.com/v1/labels) and that taken data from the user will be sent tot this third party API and it will create a label for that particular order and it will also give a receipt describing his order along with other information.

<img src="/documentation/Sytem Architecture Images/Checkout.png" alt="Alt text" width="900"  />