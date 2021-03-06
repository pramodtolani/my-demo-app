var dbConnection = function(req, res, next){
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'node_crud'
	});

	connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}
		req.objConnection = connection;
		next();
	});
}
module.exports = dbConnection;