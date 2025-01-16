# API Endpoints

Endpoint Name: /products
Method: GET
Description: It will return all t he products saved in our inventory.
Response: Product details (id, name, image, price, discount, stock etc). 

Endpoint Name: /orders
Method: POST
Description: It will take product that user want to add into a cart and save it to sanity CMS.
Response: Cart Product details (id, name, image price, discount, quantity etc).

Endpoint Name: /checkout
Method: POST
Description: It will take user shippment detials like their name, address and where they want their parcel to be deliver, etc and make a create label in shipengine so one label will be created and from which user can download their shippment receipt.
Response: Ordered Product Details (ProductName, Quatnity, ShippmentId, LabelId etc).

Endpoint Name: /track-order
Method: GET
Description: It will take labelId from the user and track their order.
Response: Shippment Details (orderStatus, expectedDeliveryTime, shippedFrom, OwnerDetails etc).