export interface OrderType {
    _id: string,
    userId: string,
    productName: string,
    colors: string[],
    status: string,
    imageUrl: {
        _type: 'image',
        asset: {
            _type: 'reference',
            _ref: string 
        }
    },
    description: string,
    category: string,
    price: number,
    inventory: number,
    quantity: number
}