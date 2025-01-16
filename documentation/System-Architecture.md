# System Architecture

# Fetch Products from Sanity and Display to Frontend

In this Design you can see that how products transfer from inventory to UI, we will have an API with GET Request called /products which will simply return all the products saved in our sanity CMS.

<img src="/documentation/Sytem Architecture Images/Product-Display.png" alt="Alt text" width="900"  />


# Add Products to Sanity and Show in Cart on Frontend

This Image showcase the workflow of AddToCart functionality, when a user click on button add to cart of any product it will make a post request on the endpoint called /orders and send whole information of a product including id, name, image, price and quantity. and save it to Sanity CMS, that later will use in the checkout.

<img src="/documentation/Sytem Architecture Images/AddToCart.png" alt="Alt text" width="900"  />
