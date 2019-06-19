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
    insert: (name, isDevoured, callback) => {
        orm.insertOne("burgers", ["burger_name", "isDevoured"], [name, isDevoured], () => {
            orm.selectAll("burgers", (data) => {
                callback(data);
            });
        });
    }
}

module.exports = burger;