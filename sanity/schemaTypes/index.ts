import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import order from './oder'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, order],
}
