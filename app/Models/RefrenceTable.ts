import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RefrenceTable extends BaseModel {
  public static table = 'ref_tables'

  @column({ isPrimary: true })
  public id: number

  @column()
  public role_id: number

}
