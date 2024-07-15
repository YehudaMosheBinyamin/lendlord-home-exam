const UsersRepo = require('../repository/users')


class Users {
  async initialize() {
    this.repo = new UsersRepo()
  }

  async findUser(query, projection = {}) {
    const user = await this.repo.findOne(query)
    return user
  }
  async getAllUsers() {
    const users = await this.repo.getAllUsers();
    return users;
  }
  async addNewUser(user){
      const users = await this.repo.addNewUser(user);
      console.log("tst");
  }
}


module.exports = Users