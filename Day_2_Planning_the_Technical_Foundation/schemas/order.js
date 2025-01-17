const order = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "customerInfo",
            title: "Customer Information",
            type: "object",
            fields: [
                {
                    name: "id",
                    title: "Customer ID",
                    type: "string",
                },
                {
                    name: "name",
                    title: "Customer Name",
                    type: "string",
                },
                {
                    name: "email",
                    title: "Customer Email",
                    type: "string",
                },
                {
                    name: "address",
                    title: "Shipping Address",
                    type: "string",
                },
            ],
        },
        {
            name: "productDetails",
            title: "Product Details",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "id",
                            title: "Product ID (String)",
                            type: "string",
                        },
                        {
                            name: "name",
                            title: "Product Name",
                            type: "string",
                        },
                        {
                            name: "quantity",
                            title: "Quantity",
                            type: "number",
                        },
                        {
                            name: "price",
                            title: "Price",
                            type: "number",
                        },
                    ],
                },
            ],
        },
        {
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
        },
    ],
};
