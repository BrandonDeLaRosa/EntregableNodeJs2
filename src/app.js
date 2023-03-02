const express = require ('express');
const db = require('./utils/database');
const ToDos = require('./models/toDos.models');
const toDosRouter = require ('./routes/toDos.routes')
const cors = require('cors');

const PORT =1025;

db.authenticate()
.then(() => {
    console.log('Conexion exitosa ok');
})
.catch((error) =>{
    console.log(error);
});

db.sync()  
.then(() => {
    console.log('Base de datos sincronizada');
})
.catch( 
    (error)=> {
        console.log(error);
});


const app = express();
app.use(cors()); 
app.use(express.json())
app.use(toDosRouter);

app.get('/', (req,res) => {
    res.send('bienvenido al servitos todoApp')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando al puerto ${PORT}`);
})



// "toDoList"