var connection = require("./connection.js");

// const { table } = require("console");  -- Created by npm i? I never entered this code.

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toSTring();
};

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {

        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };

            arr.push(key + "=" + value);

        };

    };

};

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        querySTring += " (";
        queryString += cols.toSTring();
        querySTring += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(querySTring, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        querySTring += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(querySTring, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    delete: function (table, condition, cb) {
        var querySTring = "DELETE FROM " + table;
        querySTring += " WHERE ";
        queryString += condition;

        connection.query(querySTring, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;