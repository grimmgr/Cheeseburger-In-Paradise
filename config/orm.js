const db = require('../config/connection.js');

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
        
        arr.push(key + '=' + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

const orm = {
    selectAll(table, cb) {
        db.query('SELECT * FROM ??', table, (err, res) => {
            if (err) throw err;

            cb(res);
        });
    },
    create(table, col, val, cb) {
        db.query(`INSERT INTO ${table} (${col.toString()}) VALUES (?)`, val,
        (err, res) => {
            if (err) throw err;

            cb(res);
        });
    },
    update(table, colValObj, condition, cb) {
        db.query(`UPDATE ${table} SET ${objToSql(colValObj)} WHERE ${condition}`, (err, res) => {
            if (err) throw err;
        });
    }
};

module.exports = orm;