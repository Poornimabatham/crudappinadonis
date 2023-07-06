import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tabl2s'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('Tid')
      table.string('name').notNullable()
      table.string('email').nullable()
      table.timestamps()
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
