const mongoose = require('mongoose')
const {USER_ROLES} = require("../constants/users");

const collectionName = 'users'
const schemaName = 'users'
const SchemaTypes = mongoose.Schema

const schema = new mongoose.Schema(
  {
    _id: { type: SchemaTypes.ObjectId, auto: true },
    firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      dateStarted: { type: String, default: '19/10/1970' },
      salary: {type: Number, default: 0},
      role:{type: String, default: USER_ROLES.WORKER}
  },
  { strict: false, autoCreate: true, timestamps: true }
)

const model = mongoose.model(schemaName, schema, collectionName)

module.exports = model
module.exports.schema = schema
