const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
//const { json } = require('express');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3308,
    password: "hola123",
    database: "Idiomas"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

/*app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO persona (nombreCompleto, numeroIdentidad, telefono1, telefono2, direccion, edad, correo, contraseña) VALUES (' Mateo Jose Ramirez Amador','0801-1998-09876','98554311','22245090','Tegucigalpa',23,'mateo@unah.hn','mateo123');"
     db.query(sqlInsert, (err, result) =>{
        res.send('Hello World');
    });

});*/

app.post('/', (req, res) => {

    const nombreCompleto = req.body.nombreCompleto
    const numeroIdentidad = req.body.numeroIdentidad
    const fechaRegistro = req.body.fechaRegistro
    const telefono1 = req.body.telefono1
    const telefono2 = req.body.telefono2
    const direccion = req.body.direccion
    const edad = req.body.edad
    const correo = req.body.correo
    const contrasena = req.body.contrasena

    const sqlInsert = 
    "INSERT INTO persona (nombreCompleto, numeroIdentidad, fechaRegistro, telefono1, telefono2, direccion, edad, correo, contrasena) VALUES (?,?,?,?,?,?,?,?,?);"
    db.query(sqlInsert, [nombreCompleto, numeroIdentidad, fechaRegistro, telefono1, telefono2, direccion, edad, correo, contrasena], 
        (err, result) => {
            if(err){
                console.log(err);
            }if(result){
                res.send({status:"Campos llenos"})
            }else{
                res.send({message: "Campos Vacios"});
            }
        });
});


app.post('/login', (req, res) => {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    
    db.query(
        "SELECT * FROM maestro WHERE correo = ? AND contrasena = ?",
         [correo, contrasena],
        (err, result) => {
            if(err){
                //console.log(err);
             res.send({err: err});
            }

            if (result.length > 0) {
                res.send({status: "ok"} );
                
            } else{
                res.send({message: "correo o contraseña incorrectos"} );
            }
        }
    );

});

app.post('/estudiante', (req, res) => {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    
    db.query(
        "SELECT * FROM persona WHERE correo = ? AND contrasena = ?",
         [correo, contrasena],
        (err, result) => {
            if(err){
                //console.log(err);
             res.send({err: err});
            }

            if (result.length > 0) {
                res.send({status: "ok"} );
                
            } else{
                res.send({message: "correo o contraseña incorrectos"} );
            }
        }
    );

});

app.listen(3001, () => {
    console.log("Funciona =)");
});

