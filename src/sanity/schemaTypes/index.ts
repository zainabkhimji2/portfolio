import { type SchemaTypeDefinition } from 'sanity'
import Experience from  './experience'
import Skills from './skills'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Experience,Skills],
}
