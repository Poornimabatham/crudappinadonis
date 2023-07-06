import { afterSave, BaseModel,beforeSave, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post';
import Hash from '@ioc:Adonis/Core/Hash'

export default class Post2 extends BaseModel {

  public static table =  'reference';
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  

  @column()
  public Status:number


  
  @column()
  public Ref_id:number

  
  @column()
  public Password:string

  @afterSave()
  public static async hashPassword(user: Post2) {
    if (user.$dirty.Password) {
      user.Password = await Hash.make(user.Password)
    }
  }

  

@belongsTo(()=> Post)
public post:BelongsTo<typeof Post>



// async afterSave() {
//   // Custom logic to be executed after saving/updating the profile
//   console.log('Profile saved or updated');
// }

}
