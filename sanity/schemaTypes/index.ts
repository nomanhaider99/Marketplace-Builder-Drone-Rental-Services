import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { ordersSchema } from './orders'
import { usersSchema } from './users'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, ordersSchema, usersSchema],
}
