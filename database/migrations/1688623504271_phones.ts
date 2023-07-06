import BaseSchema from '@ioc:Adonis/Lucid/Schema'
export default class extends BaseSchema {
  protected tableName = 'tabl2s'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('phone_number', 10)
      
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName,(table)=>{
     table.dropColumn('phone_number')

    })
  }
}
