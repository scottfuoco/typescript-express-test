import Joi from 'joi'
import {
    ContainerTypes,
    // Use this as a replacement for express.Request
    ValidatedRequest,
    // Extend from this to define a valid schema type/interface
    ValidatedRequestSchema,
    // Creates a validator that generates middlewares
    createValidator
  } from 'express-joi-validation'

interface QuerySchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        email: string
      }
}

const querySchema = Joi.object({
    email: Joi.string().required()
});

export {
    querySchema,
    QuerySchema
}