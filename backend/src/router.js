const express = require('express');
const router = express.Router();

const taskController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/', (request, response) => response.status(200).send('fazendo o post!!!'))

router.get('/usuarios', taskController.getAll);
router.post('/cadastrando', tasksMiddleware.validaCampos, taskController.createTask);
router.delete('/cadastrando/:id', taskController.deleteTask);
router.put('/cadastrando/:id', taskController.updateTask);

module.exports = router;