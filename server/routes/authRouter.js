const Router = require('express');
const router = new Router();
const AuthController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', AuthController.registration);
router.post('/signIn', AuthController.auth);
router.get('/auth', authMiddleware, AuthController.checkAuth);

module.exports = router;
