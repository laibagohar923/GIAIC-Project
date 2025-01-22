import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './porduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
