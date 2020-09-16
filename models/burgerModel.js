const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.selectAll('burgers', res => cb(res));
    },
    create(col, val, cb) {
        orm.create('burgers', col, val, res => cb(res));
    },
    update(colValObj, condition, cb) {
        orm.update('burgers', colValObj, condition, res => cb(res));
    }
};

module.exports = burger;