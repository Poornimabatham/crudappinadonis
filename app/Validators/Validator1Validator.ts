import { schema,rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './Basevalidator'

export default class Validator1Validator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super()
  }


  
  static  postSchema = {schema:schema.create({
name:schema.string(),
email:schema.string([rules.email()]),
phone_number:schema.string([rules.mobile(),rules.minLength(10),rules.maxLength(10)]),
   
password:schema.string([rules.alphaNum()]),
address:schema.string([rules.alpha()])

  }),message:BaseValidator.messages
}
}
