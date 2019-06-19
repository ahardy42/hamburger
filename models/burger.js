// ================================================================
// this will call the orm with burger related garbage
// ================================================================

var orm = require("../config/orm");

var burger = {
    all: (callback) => {
        orm.selectAll("burgers", (data) => {
            callback(data);
        });
    },
    update: (id, callback) => {
        var conditionString = `id = ${id}`;
        orm.updateOne("burgers", "isDevoured", true, conditionString, () => {
            orm.selectAll("burgers", (data) => {
                callback(data);
            });
        });
    },
    insert: (object, callback) => {
        orm.insertOne("burgers", object, () => {
            orm.selectAll("burgers", (data) => {
                callback(data);
            });
        });
    }
}

module.exports = burger;