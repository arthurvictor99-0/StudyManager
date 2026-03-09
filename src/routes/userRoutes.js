const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const enrollmentController = require('../controllers/enrollmentController');

router.post('/', userController.create);
router.get('/', userController.list);
router.get('/:id', userController.show);

router.post('/enroll', enrollmentController.create);

module.exports = router;