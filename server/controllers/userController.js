const { User } = require('../models/models');

class UserController {
  async fetchUsers(req, res) {
    try {
      const users = await User.findAll();

      res.status(200).send(users);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  async fetchSingleUser(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      if (!user) throw new Error();

      res.status(200).send(user);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  async editUser(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      user.set({
        username: req.body.username,
        email: req.body.email,
      });

      await user.save();

      const newUser = await User.findOne({
        where: {
          id: userId,
        },
      });

      res.status(200).send(newUser);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      await user.destroy();

      res.status(200).send({ userId });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }
}

module.exports = new UserController();
