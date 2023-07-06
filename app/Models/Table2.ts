import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Table2 extends BaseModel {
  public static table = 'app_users'

  @column({ isPrimary: true })
  public Tid: number

  @column()
  public name:string;

  
  @column()
  public email:string;
  
  @column()
  public phone_number:number
  
  @column()
  public password:number

  @column()
  public address:string|number
 

}
