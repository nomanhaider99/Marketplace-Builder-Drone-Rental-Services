const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'ID',
            validation: (Rule) => Rule.required().min(2).max(50),
        },
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
            validation: (Rule) => Rule.required().min(3).max(50),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for accessibility and SEO.',
                },
            ],
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: (Rule) => Rule.required().positive().precision(2),
        },
        {
            name: 'discount',
            type: 'number',
            title: 'Discount (%)',
            validation: (Rule) => Rule.min(0).max(100),
        },
        {
            name: 'stock',
            type: 'number',
            title: 'Stock Quantity',
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'Brief description of the product.',
            validation: (Rule) => Rule.max(500),
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
        },
    ],
};