

const User = require("../models/User");
module.exports = {
  async store(req, res) {
    const users = await User.create(req.body);
    return res.json(users);
  },
  
  async index(req, res) {
    const users = await User.findOne({ _id: req.params.id });
    return res.json(users);
  }
 
};
