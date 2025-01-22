export interface ProductType {
  _id: string,
  productName: string,
  colors: string[],
  status: string,
  imageUrl: {
    asset: {
      url: string
    }
  },
  description: string,
  category: string,
  price: number,
  inventory: number
}