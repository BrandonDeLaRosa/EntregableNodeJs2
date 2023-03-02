const { Router } =require('express');  
const ToDos = require ('../models/toDos.models')

const router = Router();

router.get('/api/v1/toDos', async (req,res) =>{
    try {
        const toDo = await ToDos.findAll({
            attributes:["id","title","description","status"]
        });
        res.json(toDo)
    } catch (error) {
        res.status(400).json(error);
    }
});


// ! Encontrar un usuario por su id (FIND BY PRIMARYKEY)

router.get('/api/v1/users/:id', async (req, res) => {
    try {
        //obtener por params.
        const { id } =req.params;
        // consultar a la base de datos.
        const user = await User.findByPk(id);
        // Enviamos la respuesta al cliente.
        res.json(user);
    } catch (error) {
        res.status(400).json(error)
    }
})

// ! BUSQUEDA POR ALGUN PARAMETRO DIFERENTE A ID.

router.get("/api/v1/users/email/:email", async (req, res) =>{
    try {
        const { email }= req.params;
        const user = await User.findOne({
            where: {email},
            attributes: ["id","name", "email","password"]
        }) ;
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
})



router.post('/api/v1/toDos' , async (req,res) => {
    try {
        const newToDo = req.body;
        console.log(newToDo)
        const toDo = await ToDos.create(newToDo)
        res.status(201).send(toDo);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/api/v1/toDos/:id', async (req, res) => {
    try {
        const {id} = req.params;
         await ToDos.destroy({
            where: { id }
        });
        res.status(204).send('No content');
    } catch (error) {
        res.status(400).json(error)
    }
});


router.put( '/api/v1/toDos/:id', async ( req, res )=> {
    try {
        const {id} = req.params;      //<-- Parametro para saber cual se va actualizar.
        const data = req.body;      //<-- Info que se va actualizar.
        await ToDos.update(data,{      // <--- Sino se envia informacion "send()", se pone desde el await.
            where:{id}
        });
        res.status(201).send()

        // const result = await ToDos.update(data,{  <--- Si se va enviar info se coloca con variable.
        //     where:{id}
        // });
        // res.status(201).send(result)

    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router; 