import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Post2 from 'App/Models/Post2';
  // import ServiceNameService from 'App/Services/Fetching';
  import Validator1Validator from 'App/Validators/Validator1Validator';
  

export default class UsersController {
  public async index({}: HttpContextContract) {
    
    
    
   
    
  }

  public async getSelectedEmployeeShift({request}: HttpContextContract) {
    const orgid = request.input('orgid', '0')
      const empid = request.input('empid', '0')
      const shiftid = await this.getShiftIdByEmpID(empid)
      const res = []

      



      const query:any= await Post2.query()
      .select('Id','Name','TimeIn','TimeOut','shifttype','HoursPerDay')
        .where ('Id' , 'empid')
    

      const shifts = await Database.raw(query, [shiftid])
      const rows = shifts[0]

      if (rows.length > 0) {
        rows.forEach((row) => {
          const data = {
            Id: row.Id,
            Name: row.Name,
            TimeIn: row.TimeIn,
            TimeOut: row.TimeOut,
            shifttype: row.shifttype,
            HoursPerDay: row.HoursPerDay
          }
          res.push(data)
        })
      }
  }

  async getShiftIdByEmpID(empid) {
    // Implement your logic to fetch the shift ID based on the employee ID
  //   // You can use the AdonisJS database query builder or any other approach
  //   // and return the shift ID
  //   // For demonstration purposes, returning a mock shift ID
    return 1
  }

  

  public async create({}: HttpContextContract) {}

  public async   edit({}: HttpContextContract) {
     
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {
    

  








}
}
  

