const usersModel = require('../models/users')

class Users {
  async findOne(query, projection = {}) {
    const user = await usersModel.findOne(query).select(projection)
    return user
  }
  async getAllUsers(query, projection = {}) {
    const users = await usersModel.find().select();
    return users
  }

  async addNewUser(user) {
    console.log("tst");
    try {

      await usersModel.create(user);
    }
    catch(err){
      console.log(err);
    }
    return getAllUsers();
  }
}

module.exports = Users