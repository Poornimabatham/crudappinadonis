
// import Post2 from "App/Models/Post2";
import Database from "@ioc:Adonis/Lucid/Database";
export default  class ServiceNameService{
  
   
   static async Fetching(o){
// return o.OrganizationId


    const users = await Database.from('designationmaster')
    
    .join('custom_table', 'designationmaster.Id', 'custom_table.Designation_Id')
    .select('designationmaster.Id', 'custom_table.status')
    .limit(4)

    return users



    
    
   }
}
    
                                                                                                                        
