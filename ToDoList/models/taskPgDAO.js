const { Client } = require('pg');
const Task = require('../models/task');


class TaskPgDAO{

    constructor(){

        this._client = new Client({
            connectionString : 'postgres://postgres:Password1@172.16.4.199:5432/Cabale'
            //connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }

    getAllTasks(displaycb){

        const query = {
            name: 'fetch-all-task',
            text: 'SELECT * FROM cabalist',
        };

        this._client.query(query, function(err, result){
            let lesTasks = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let uneTask;

                    uneTask = new Task(lesTasks.length, row['nom']);
                    lesTasks.push(uneTask);
                });

                displaycb(lesTasks);

            }

        });


    };

    getTaskFromId(unId,displaycb) {

        const query = {
            name: 'fetch-one-task',
            text: 'SELECT * FROM cabalist WHERE rank= $1',
            values: [unId]
        };

        this._client.query(query,function(err, result){
            if (err) {
                console.log(err.stack);
            }else{
                let uneTask;
                uneTask = new Task(0, result.rows[0]['nom']);
                displaycb(uneTask);
            }
        })
    };


}


module.exports = TaskPgDAO;