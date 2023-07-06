import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {

  public async up () {
   
      this.schema.renameTable('tabl2s', 'app_users')

    
  }

  
}
