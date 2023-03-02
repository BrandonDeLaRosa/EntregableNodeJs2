const ToDos = require ('../models/toDos.models');

class ToDosServices {

    static async getAll(){
        try {
            const toDos = await ToDos.findAll({
                attributes:["id","title","description","status"]
            })
            return toDos;
        } catch (error) {
            throw(error);
        }
    }

    static async getById(id){
        try {
            const toDoById = await ToDos.findByPk(id)
            return toDoById
        } catch (error) {
            throw (error);
        }
    }

    static async newTask(newToDo) {
        try {
            const toDo = await ToDos.create(newToDo)
            return toDo
        } catch (error) {
            throw (error);
        }
    }

    static async deleteTask(id){
        try {
            const toDo = await ToDos.destroy({
                where: {id}
            });
            return toDo
        } catch (error) {
            throw(error)
        }
    }

    static async updateTask(data){
        try {
            const {id, todo} = data
            const toDo = await ToDos.update(todo,{
                where: {id}
            });
            return toDo
        } catch (error) {
            throw(error)
        }
    }

}

module.exports = ToDosServices;