import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
 
  
  public async handle(error: any, ctx: HttpContextContract) {
    // console.log(error)
    /**
     * Self handle the validation exception
     */
    // return error.type
    // return error.sqlMessage
    if (error.message === 'E_ROW_NOT_FOUND: Row not found' || error.code === 'ER_NO_SUCH_TABLE') {
      return ctx.response.status(422).send('please wait for some time')
    }

    return super.handle(error, ctx)
  }
  
}