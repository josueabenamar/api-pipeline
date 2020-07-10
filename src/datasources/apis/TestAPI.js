import { DataSource } from 'apollo-datasource'

export default class TestAPI extends DataSource {
  constructor ({ store }) {
    super()
  }

  initialize (config) {
    this.context = config.context
  }

  async testService () {
    return { value: 1 }
  }
}
