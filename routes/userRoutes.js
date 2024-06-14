const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', userController.createUser);
router.get('/me', authenticate, userController.getUser);
router.get('/me/questions', authenticate, userController.getUserQuestions);

module.exports = router;
