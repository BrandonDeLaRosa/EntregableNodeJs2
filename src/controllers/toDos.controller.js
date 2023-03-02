const ToDosServices = require('../services/toDos.services');

const getAllToDos = async (req,res) => {
    try {
        const toDos = await ToDosServices.getAll();
        res.json(toDos)
    } catch (error) {
        res.status(400).json(error);
    }
}

const getByPk = async (req,res) => {
    try {
        const {id} = req.params;
        const byId = await ToDosServices.getById(id)
        res.json(byId)
    } catch (error) {
        res.status(400).json(error);
    }
}

const createNewToDo = async (req,res) => {
    try {
        const newToDo = req.body;
        const createdTask = await ToDosServices.newTask(newToDo);
        res.json(createdTask)
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteToDo = async (req,res) => {
    try {
        const {id} = req.params
        const toDoDelete = await ToDosServices.deleteTask(id)
        res.json(toDoDelete)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateToDo = async (req,res) => {
    try {
        const {id} = req.params
        const todo = req.body
        const data = {id,todo}
        const toDoUpdate = await ToDosServices.updateTask(data)
        res.json(toDoUpdate)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllToDos,
    createNewToDo,
    getByPk,
    deleteToDo,
    updateToDo
}