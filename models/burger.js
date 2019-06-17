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
    
}

module.exports = burger;