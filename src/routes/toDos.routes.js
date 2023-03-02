const { Router } =require('express');  
const ToDos = require ('../models/toDos.models');
const { getAllToDos, getByPk, createNewToDo, deleteToDo, updateToDo } = require ('../controllers/toDos.controller');

const router = Router();

router.get('/api/v1/toDos', getAllToDos);
router.get('/api/v1/toDos/:id', getByPk);
router.post('/api/v1/toDos', createNewToDo);
router.delete('/api/v1/toDos/:id',deleteToDo);
router.put('/api/v1/toDos/:id',updateToDo);

module.exports = router; 