
const {Router} = require ('express');
const router = Router();                                        // FICHERO CON CADA ENDPOINT
const bookCtrl = require ('../controller/book.controller');


router.get('/books/:id_user', bookCtrl.getUserBooksParams);
router.get('/books/:id_user&:id_book', bookCtrl.getUserBookParams);

router.post('/books', bookCtrl.addBookUser);
router.put('/books', bookCtrl.editBook);
router.delete('/books', bookCtrl.deleteBook);

module.exports = router;

// AQUÍ ESPECIFICAMOS, DEPENDIENDO DE LA RUTA, QUÉ FUNCIÓN QUEREMOS QUE SE EJECUTE