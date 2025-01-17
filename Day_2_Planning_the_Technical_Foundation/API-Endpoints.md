# API Documentation

This documentation provides an overview of the API endpoints for managing inventory, orders, and shipments.

---

## **Endpoints Overview**

### 1. **Products Endpoint**
- **Endpoint Name**: `/products`  
- **Method**: `GET`  
- **Description**: Retrieves all products saved in the inventory.  
- **Response**:  
  - **Product Details**:  
    - `id`: Unique identifier  
    - `name`: Product name  
    - `image`: Product image URL  
    - `price`: Product price  
    - `discount`: Discount percentage  
    - `stock`: Available stock  

---

### 2. **Orders Endpoint**
- **Endpoint Name**: `/orders`  
- **Method**: `POST`  
- **Description**: Adds a product to the cart and saves it to Sanity CMS.  
- **Request Body**:  
  - **Cart Product Details**:  
    - `id`: Unique product identifier  
    - `name`: Product name  
    - `image`: Product image URL  
    - `price`: Product price  
    - `discount`: Discount percentage  
    - `quantity`: Quantity added to the cart  

---

### 3. **Checkout Endpoint**
- **Endpoint Name**: `/checkout`  
- **Method**: `POST`  
- **Description**: Processes user shipment details to create a shipping label via ShipEngine.  
- **Request Body**:  
  - **Shipment Details**:  
    - `name`: User's name  
    - `address`: Delivery address  
    - Other relevant shipment details  
- **Response**:  
  - **Ordered Product Details**:  
    - `ProductName`: Name of the product  
    - `Quantity`: Ordered quantity  
    - `ShipmentId`: Unique shipment identifier  
    - `LabelId`: Label ID for the created shipment  

---

### 4. **Track Order Endpoint**
- **Endpoint Name**: `/track-order`  
- **Method**: `GET`  
- **Description**: Tracks an order using the provided `labelId`.  
- **Request Parameter**:  
  - `labelId`: Unique identifier for the shipment label  
- **Response**:  
  - **Shipment Details**:  
    - `orderStatus`: Current status of the order  
    - `expectedDeliveryTime`: Estimated delivery time  
    - `shippedFrom`: Origin of the shipment  
    - `OwnerDetails`: Information about the order owner  

---

