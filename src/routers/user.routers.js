
const {Router} = require ('express');
const router = Router();                                        // FICHERO CON CADA ENDPOINT
const userCtrl = require ('../controller/user.controller');


router.post('/register', userCtrl.addUser);

router.post('/login', userCtrl.getUser);



module.exports = router;

// AQUÍ ESPECIFICAMOS, DEPENDIENDO DE LA RUTA, QUÉ FUNCIÓN QUEREMOS QUE SE EJECUTE