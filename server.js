const express = require('express');
const sql = require("mssql");

// config for your database
const config = {
    user: 'sa',
    password: '1234',
    server: 'localhost\\MSSQL2016', 
    database: 'thaibma_hrms',
    options: {
        encrypt: true,
        enableArithAbort: true,
    },
};

const app = express();
app.get('/', (req, res) => {
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);

        // create Request object
        const request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT [employee_code],[first_name_en]+\' \'+[last_name_en] AS [full_name] FROM [dbo].[t_hrms_employee]', function (err, recordset) {
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordsets[0]);
        });
    });
});

const server = app.listen(5000, function () {
    console.log('Server is running..');
});