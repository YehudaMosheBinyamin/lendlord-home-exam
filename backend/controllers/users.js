const { ObjectId } = require('mongodb')
const Users = require('../lib/users')
const users = new Users()

/**
 * Gets user by id
 */
exports.getUserById = async ctx => {
  const { id } = ctx.params
  try {
    console.log(1)
    const user = await users.findUser({ _id: new ObjectId(id) })
    
    ctx.status = 200
    ctx.body = user  
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}
exports.getAllUsers = async ctx => {
  try {
    console.log(1)
    const usersFound = await users.getAllUsers()
    ctx.status = 200
    ctx.body = usersFound
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

async function initialize() {
  await users.initialize();
}
exports.addNewUser = async user =>  {
  try {
    await users.addNewUser(user);
    return 1;
  }
  catch (error) {
    console.log("User addition failed" + error);
    return -1;
  }
}
initialize()