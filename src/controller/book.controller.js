
const { pool } = require("../../database");

const getUserBooksParams = async (request, response) => {
    try {

        let params = [request.body.email, request.body.password];

        let sql = "SELECT name, last_name, email, photo FROM user WHERE email = ? AND password = ?";
        console.log(sql);

        let [result] = await pool.query(sql, params);
        console.log(result);

        if (result == []) {

            let respuesta = { error: false, codigo: 200, mensaje: "El Usuario no existe" };
            response.send(respuesta);

        } else {

            let respuesta = { error: false, codigo: 200, mensaje: "Usuario encontrado", user: result };
            response.send(respuesta);
        }

    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const getUserBookParams = async (request, response) => {
    try {

        let params = [request.body.email, request.body.password];

        let sql = "SELECT name, last_name, email, photo FROM user WHERE email = ? AND password = ?";
        console.log(sql);

        let [result] = await pool.query(sql, params);
        console.log(result);

        if (result == []) {

            let respuesta = { error: false, codigo: 200, mensaje: "El Usuario no existe" };
            response.send(respuesta);

        } else {

            let respuesta = { error: false, codigo: 200, mensaje: "Usuario encontrado", user: result };
            response.send(respuesta);
        }

    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const addBookUser = async (request, response) => {
    try {

        let params = [request.body.email, request.body.password];

        let sql = "SELECT name, last_name, email, photo FROM user WHERE email = ? AND password = ?";
        console.log(sql);

        let [result] = await pool.query(sql, params);
        console.log(result);

        if (result == []) {

            let respuesta = { error: false, codigo: 200, mensaje: "El Usuario no existe" };
            response.send(respuesta);

        } else {

            let respuesta = { error: false, codigo: 200, mensaje: "Usuario encontrado", user: result };
            response.send(respuesta);
        }

    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const editBook = async (request, response) => {
    try {

        let params = [request.body.email, request.body.password];

        let sql = "SELECT name, last_name, email, photo FROM user WHERE email = ? AND password = ?";
        console.log(sql);

        let [result] = await pool.query(sql, params);
        console.log(result);

        if (result == []) {

            let respuesta = { error: false, codigo: 200, mensaje: "El Usuario no existe" };
            response.send(respuesta);

        } else {

            let respuesta = { error: false, codigo: 200, mensaje: "Usuario encontrado", user: result };
            response.send(respuesta);
        }

    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const deleteBook = async (request, response) => {
    try {

        let params = [request.body.email, request.body.password];

        let sql = "SELECT name, last_name, email, photo FROM user WHERE email = ? AND password = ?";
        console.log(sql);

        let [result] = await pool.query(sql, params);
        console.log(result);

        if (result == []) {

            let respuesta = { error: false, codigo: 200, mensaje: "El Usuario no existe" };
            response.send(respuesta);

        } else {

            let respuesta = { error: false, codigo: 200, mensaje: "Usuario encontrado", user: result };
            response.send(respuesta);
        }

    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

module.exports = { getUserBooksParams, getUserBookParams, addBookUser, editBook, deleteBook };