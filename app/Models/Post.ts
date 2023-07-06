import { BaseModel,hasOne,
  HasOne, column } from '@ioc:Adonis/Lucid/Orm'
import Post2 from './Post2'
export default class Post extends BaseModel {
  public static table = 'designation'

  @column({ isPrimary: true })
  public Id: number



  
  @column()
  public OrganizationId:number


  
  @column()
  public Status:number

  @column()
  public Name:string

  



  @hasOne(() => Post2)
  public post2: HasOne<typeof Post2>
  
  //  async afterSave() {
  //   // Custom logic to be executed after saving/updating the user
  //   console.log('User saved or updated');
  // }

}
