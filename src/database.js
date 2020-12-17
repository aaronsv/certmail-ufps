const mysql = require('mysql');
const { promisify } = require('util');


const { database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {

    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La concexion con la base de datos ha sido cerrada');
        }
        if (err.code === 'ERR_CON_COUNT_ERROR') {
            console.error('lA BASE DE DATOS TIENE MUCHAS CONEXIONES');
        }
        if (err.code === 'ECONNNREFUSED') {
            console.error('La concexion ha sido rechazada');
        }
    }

    if (connection) connection.release();
    console.log('LA BASE DE DATOS ESTA CONECTADA');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;