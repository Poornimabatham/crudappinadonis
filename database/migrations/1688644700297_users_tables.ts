import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users_tables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
    
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
