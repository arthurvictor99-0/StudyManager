const express = require('express');
const router = express.Router();

// O segredo está nos DOIS PONTOS (../) para subir um nível de pasta
const userController = require('../controllers/userController');
const enrollmentController = require('../controllers/enrollmentController');

// Rotas de Usuário
router.post('/', userController.create);
router.get('/', userController.list);
router.get('/:id', userController.show);

// Rota de Matrícula (Se você quiser que ela responda em /users/enroll)
router.post('/enroll', enrollmentController.create);

module.exports = router;