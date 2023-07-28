//const express = require("express");
const sql = require("mysql2");


const database = sql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "employee_database"
    },

    console.log("employee_database Connected")
);


module.exports = database;
