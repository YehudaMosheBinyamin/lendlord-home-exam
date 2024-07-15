const mongoose = require('mongoose')
const {getUserById} = require("../controllers/users");
const { ObjectId } = require('mongodb')
const {getAllUsers} = require("../controllers/users");
const {addNewUser} = require("../controllers/users");
const {USER_ROLES} = require("../constants/users");

mongoose.set('strictQuery', false)

mongoose?.connection?.on('connected', () => {
  log.info('Mongoose connected')
})

mongoose?.connection?.on('disconnected', () => {
  log.info('Mongoose disconnected')
})

mongoose?.connection?.on('error', err => {
  log.error('Mongoose error', err)
})

module.exports.init = async () => {
  const connString = process.env.MONGO_CONN_STRING ? process.env.MONGO_CONN_STRING : config.database
  await mongoose.connect(connString)
  log.info('connected to database')
  let ctx1 = {
    params :
        {id: '6348acd2e1a47ca32e79f46f'
      }
  }
  let a = getUserById(ctx1);
  let b = getAllUsers();
  let newObjId = new ObjectId();
  let newUser = {
    _id: newObjId,
    firstName: 'Jared',
    lastName: 'Cook',
    email: 'j@k.com',
    dateStarted: '19/10/1970',
    salary: 2000,
    role:USER_ROLES.WORKER
  };
  let c = addNewUser(newUser);
}
