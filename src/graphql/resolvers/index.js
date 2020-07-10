import fs from 'fs'
import path from 'path'
import { merge } from 'lodash'

const res = []
const basename = path.basename(__filename)

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach(file => {
    const resolver = require(`./${file}`).resolvers
    res.push(resolver)
  })

export const resolvers = merge(...res)
