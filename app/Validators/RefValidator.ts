import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './Basevalidator'

export default class RefValidator extends BaseValidator{
  constructor(protected ctx: HttpContextContract) {
    super()
  }
static newSchema = {schema:schema.create({

  id:schema.number(),
  role_id:schema.number(),
}),message:BaseValidator.messages

}
 
}
