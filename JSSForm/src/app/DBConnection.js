// var Connection = require('tedious').Connection;
// var Request = require('tedious').Request;

// // Create connection to database
// var config =
// {
//     userName: 'admin_login',
//     password: 'Start@123',
//     server: 'manutd8.database.windows.net',
//     options:
//     {
//         database: 'TestSDB',
//         encrypt: true
//     }
// }
// var connection = new Connection(config);

// // Attempt to connect and execute queries if connection goes through
// connection.on('connect', function(err)
//     {
//         if (err)
//         {
//             console.log(err)
//         }
//         else
//         {
//             console.log("success");
//             queryDatabase()
//         }
//     }
// );

// function queryDatabase(){
//     console.log('Reading rows from the Table...');

//     // Read all rows from table
//     var request = new Request(
//         'SELECT * FROM "User"',
//         function(err, rowCount, rows)
//         {
//             console.log(rowCount + ' row(s) returned');
//             process.exit();
//         }
//     );

//     request.on('row', function(columns) {
//         columns.forEach(function(column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//         });
//     });
//     connection.execSql(request);
// }