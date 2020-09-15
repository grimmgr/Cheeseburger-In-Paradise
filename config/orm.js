const db = require('../config/connection.js');

const orm = {
    selectAll(table, cb) {
        db.query(`SELECT * FROM ${ table }`, (err, res) => {
            if (err) throw err;

            cb(res);
        });
    },
    create(table, col, val, cb) {
        db.query(`INSERT INTO ${table} ( ${col.toString()} ) VALUES ( ${val} )`,
        (err, res) => {
            if (err) throw err;

            cb(res);
        });
    }
};

module.exports = orm;