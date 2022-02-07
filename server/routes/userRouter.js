const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');

router.get('/users', UserController.fetchUsers); // fetch all users
router.get('/users/:userId', UserController.fetchSingleUser); // fetch user
router.put('/users/:userId', UserController.editUser); // edit user
router.delete('/users/:userId', UserController.deleteUser); // delete user

module.exports = router;
