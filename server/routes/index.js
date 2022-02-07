const Router = require('express');
const router = new Router();

const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const profileRouter = require('./profileRouter');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/profile', profileRouter);

module.exports = router;
