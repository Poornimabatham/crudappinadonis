import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'ref_tables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('role_id')
        .unsigned()
        .references('Tid')
        .inTable('tabl2s')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
