// connect to database
const db = require('../config/connection.js');
// helper function to convert objects to SQL language
function objToSql(ob) {
    const arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      const value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations 
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = '\'' + value + '\'';
        }
        // push query condition to array
        arr.push(key + '=' + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

const orm = {
    // query datablase for all entries of a table
    selectAll(table, cb) {
        db.query('SELECT * FROM ??', {table}, (err, res) => {
            if (err) {
                throw err
            };

            cb(res);
        });
    },
    // insert a row into a table
    create(table, col, val, cb) {
        db.query(`INSERT INTO ${table} (${col.toString()}) VALUES (?)`, val,
        (err, res) => {
            if (err) throw err;

            cb(res);
        });
    },
    // update a table
    update(table, colValObj, condition, cb) {
        db.query(`UPDATE ${table} SET ${objToSql(colValObj)} WHERE ${condition}`, (err, res) => {
            if (err) throw err;

            cb(res);
        });
    },
    // delete row from table
    delete(table, condition, cb) {
        db.query(`DELETE FROM ${table} WHERE ${condition}`, (err, res) => {
            if (err) throw err;

            cb(res);
        })
    }
};

module.exports = orm;