const Router = require('express');
const router = new Router();
const ProfileController = require('../controllers/profileController');

router.post('/profiles', ProfileController.addProfile); // add profile
router.put('/profiles/:profileId', ProfileController.editProfile); // edit profile
router.delete('/profiles/:profileId', ProfileController.deleteProfile); // delete profile

module.exports = router;
