import { typeDefs } from './schemas'
import { resolvers } from './resolvers'
import { directives as schemaDirectives } from './directives'
import { buildFederatedSchema } from '@apollo/federation'

export const schema = buildFederatedSchema({
  typeDefs,
  resolvers,
  schemaDirectives
})
