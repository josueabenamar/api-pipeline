import fs from 'fs'
import path from 'path'
import { gql } from 'apollo-server'

const schemas = []
const basename = path.basename(__filename)

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach(file => {
    const typeDef = require(`./${file}`).typeDef
    schemas.push(gql`${typeDef}`)
  })

export default schemas
