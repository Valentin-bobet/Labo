// Display list of all Task
exports.task_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tasks list');
};

// Display detail page for a specific Task
exports.task_detail = function(req, res, next) {

    const pg = require('pg');
    const connectionString = process.env.DATABASE_URL || 'postgres://postgres:Password1@192.168.1.50:5432/todo';

    const db = new pg.Client(connectionString);
    db.connect();
    const query = {
    // give the query a unique name
    name: 'fetch-author',
    text: 'SELECT * FROM task WHERE id = $1',
    values: [req.params.id]
    };

    db.query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');

        } else {
            console.log(result.rows[0]['name']);
            res.send('Task detail: ' + req.params.id + ' Libelle : '+ result.rows[0]['libelle']);

        }
    });
};

// Handle Task create on POST
exports.task_ajout_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Task create POST');
};