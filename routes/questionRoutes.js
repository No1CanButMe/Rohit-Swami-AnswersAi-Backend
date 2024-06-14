const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, questionController.postQuestion);
router.get('/:questionId', authenticate, questionController.getQuestion);

module.exports = router;
