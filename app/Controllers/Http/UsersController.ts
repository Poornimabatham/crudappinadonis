import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
  // import ServiceNameService from 'App/Services/Fetching';
  import Validator1Validator from 'App/Validators/Validator1Validator';
  
  import Table2 from 'App/Models/Table2';
  import RefrenceTable from 'App/Models/RefrenceTable';
  import Database from '@ioc:Adonis/Lucid/Database';
import RefValidator from 'App/Validators/RefValidator';

export default class UsersController {
  public async index({}: HttpContextContract) {
    
    // const result = await Database
    // .from('app_users')
    // .join('ref_tables', 'ref_tables.role_id', '!=', 'app_users.Tid')
    // .select('app_users.name', 'ref_tables.role_id','app_users.email','app_users.password');
    // return result

    
   
    
  }

  public async show({}: HttpContextContract) {
    
    const users = await Table2
    .query() // 👈now have access to all query builder methods
    .where('phone_number', 247483647)
    .andWhere('name','sonia batham')
  
    return users
  }

  

  

  public async create({}: HttpContextContract) {}

  public async   edit({}: HttpContextContract) {
     
    const fetchUser= await  Table2.query().where('name', 'poornima batham').update('name','sonia batham').update('password',2322)

return fetchUser
  }

  public async update({}: HttpContextContract) {}

  public async destroy({response}: HttpContextContract) {
    const fetchUser= await  Table2.query().where('Tid', 4).delete()


  






  return response.ok({ message: 'Post deleted successfully.' })





}
}
  

