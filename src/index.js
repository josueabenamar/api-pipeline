import defaults from './defaults'
import { ApolloServer } from 'apollo-server'
import { schema } from './graphql/schema'
import { apis } from './datasources'
import logger from './logger'

const port = defaults('PORT')
const playground = defaults('ENABLE_PLAYGROUND', true)
const defaultLang = defaults('DEFAULT_LANG')
const defaultTimezone = defaults('DEFAULT_TIMEZONE')

const context = async ({ req, connection }) => {
  return connection
    ? connection.context
    : {
      token: req.headers.authorization,
      origin: req.headers.origin,
      lang: req.headers.lang || defaultLang,
      timezone: req.headers.timezone || defaultTimezone
    }
}

const formatError = function (err) {
  return {
    message: err.message,
    code: err.extensions.code
  }
}

const server = new ApolloServer({ dataSources: () => (apis), schema, context, playground, formatError })

server.listen({ port }).then(({ url }) => {
  logger.info(`🚀 Server ready at ${url}`)
})
