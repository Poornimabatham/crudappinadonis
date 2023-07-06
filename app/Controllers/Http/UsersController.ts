import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
  // import ServiceNameService from 'App/Services/Fetching';
  import Validator1Validator from 'App/Validators/Validator1Validator';
  // import Post from 'App/Models/Post';
  // import Post2 from 'App/Models/Post2';
  import Table2 from 'App/Models/Table2';
  import RefrenceTable from 'App/Models/RefrenceTable';
  // import Database from '@ioc:Adonis/Lucid/Database';
import RefValidator from 'App/Validators/RefValidator';

export default class UsersController {
  public async index({}: HttpContextContract) {

    // Using Join
    // const result = await Database
    // .from('designation')
    // .join('reference', 'reference.Ref_id', '=', 'designation.Id')
    // .select('designation.Name', 'reference.name','reference.Status');
    // return result

    // Verify a password
    
  }

  public async show({response}: HttpContextContract) {
    
// Fetch all users
// const allUsers = await Table2.all()

// return allUsers
// Find a user by ID
// const user = await Table2.find(9)

// if(!user){
//   return response.notFound({message:'user not found'})

// }else{
// return user
// }
  }

// public async store({request,response}: HttpContextContract) {


  // const payload: any = await request.validate(Validator1Validator.postSchema, )
  // // console.log(payload)
  
 
  // const post: Table2 = await Table2.create(payload)

  // return response.ok(post)

  //   await post.save()


    

  // // const payload2: any = await request.validate(RefValidator.newSchema, )
  // console.log(payload2)
  
 
  // const post2: RefrenceTable = await RefrenceTable.create(payload2)

  // return response.ok(post2)

  //   await post2.save()





  
  // }

  // public async getDesignationList({request,response}: HttpContextContract) {
    

    
    
    
//     const payload: any = await request.validate(Validator1Validator.postSchema, )
//     //  return payload
// const designations = await ServiceNameService.Fetching(payload)
   
//    return response.ok(designations)
  








  // }



  

  public async create({}: HttpContextContract) {}

  public async   edit({}: HttpContextContract) {
     
  //   await Post.query()
  // .where('Ref_id', 5)
  // .update({
  //   name: 'rahul khan',
  //   Status: 1
  // });


  // UPDATE designation INNER JOIN reference ON designation.Id = reference.Ref_id SET designation.Name = 'myname' WHERE reference.Ref_id = 2;


  // UPDATE designation INNER JOIN reference ON designation.Id = reference.Ref_id SET designation.Name = 'referencename' WHERE reference.Ref_id = 2;

//   const affectedRows = await Database.raw(`
//   UPDATE  designation 
//   INNER JOIN  reference ON designation.Id = reference.Ref_id 
//   SET designation.Name = 'new_username'
//   WHERE  reference.Ref_id = 2 
// `);
// return affectedRows




  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {
    
    const user = await Table2.findOrFail(1)
    // return user
await user.delete()

    // return response.ok({ message: 'user deleted successfully.' })
}
  
}
