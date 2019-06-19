var connection = require("./connection");


// Helper function to convert object key/value pairs to SQL syntax
var insertColsAndValues = (object) => {
    var colsArray = [];
    var valuesArray = [];
    for (var key in object) {
        colsArray.push(key);
        valuesArray.push(object[key]);
    }
    return [colsArray, valuesArray];
}

var orm = {
    // select all query
    selectAll: (table, callback) => {
        const sqlString = "SELECT * FROM ??";
        connection.query(sqlString, [table], (err, data) => {
            if (err) console.log(err);
            callback(data);
        });
    },
    updateOne: (table, col, val, conditionString, callback) => {
        const sqlString = "UPDATE ?? SET ?? = ? WHERE ??";
        connection.query(sqlString, [table, col, val, conditionString], (err, data) => {
            if (err) console.log(err);
            callback(data);
        });
    },
    insertOne: (table, object, callback) => {
        const columns = insertColsAndValues(object)[0];
        const updatedColumns = insertColsAndValues(object)[1];
        const sqlString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(sqlString, [table, columns, updatedColumns], (err, data) => {
            if (err) console.log(err);
            callback(data);
        });
    }

}

module.exports = orm;