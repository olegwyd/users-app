const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '30d',
  });
};

class AuthController {
  async registration(req, res, next) {
    const { userName, email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password'));
    }
    const candidateEmail = await User.findOne({ where: { email } });
    if (candidateEmail) {
      return next(ApiError.badRequest('User with such email allready exist'));
    }
    const candidateName = await User.findOne({ where: { userName } });
    if (candidateName) {
      return next(
        ApiError.badRequest('User with such username allready exist')
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      userName,
      email,
      role,
      password: hashPassword,
    });
    const token = generateJwt(user.id, user.email, user.role, user.userName);
    return res.json({ token });
  }

  async auth(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Can not find user'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Incorect password'));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async checkAuth(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new AuthController();
