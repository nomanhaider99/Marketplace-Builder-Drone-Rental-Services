import { Rule } from "sanity";

export const ordersSchema    = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'inventory',
            title: 'Inventory',
            type: 'number',
            validation: (Rule: Rule) => Rule.optional(),
        },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule: Rule) => Rule.optional(),
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            validation: (Rule: Rule) => Rule.optional(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image', 
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: Rule) => Rule.optional(),
        },
    ],
}