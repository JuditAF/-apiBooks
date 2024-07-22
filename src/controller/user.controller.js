
const { pool } = require("../../database");


const getUser = async (request, response) => {
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

const addUser = async (request, response) => {
    try {
        console.log(request.body);

        let params = [request.body.name, request.body.last_name, request.body.email, request.body.photo, request.body.password];

        let sql = "INSERT INTO user ( name, last_name, email, photo, password )" +
            " VALUES ( ?, ?, ?, ?, ? )";

        console.log(sql);

        let [result] = await pool.query(sql, params);
        console.log(result);

        if (result.insertId) {                                  // InertId es un método de sql

            respuesta = {
                error: false, codigo: 201,                      // 201: Código Objeto Creado
                mensaje: "Usuario añadido", data: String(result.insertId)
            }
        } else {

            respuesta = {
                error: true, codigo: 200,
                mensaje: "El Usuario ya existe", data: String(-1)
            }
        }
        response.send(respuesta);
    } catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    };
};


module.exports = { getUser, addUser };

// { "name" : "Aurora",
//     "last_name" : "Herrera",
//     "email" : "redesAndmas@gmail.com",
//     "photo" : "https://pbs.twimg.com/profile_images/1724036936040321024/bPjrH8Zh_400x400.jpg",
//     "password" : "576SD349G" }