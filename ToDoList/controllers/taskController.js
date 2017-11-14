const TaskPgDAO = require('../models/taskPgDAO');

const taskPgDAO = new TaskPgDAO();

// Display list of all Task
exports.task_list = function(req, res,next){

    taskPgDAO.getAllTasks(
        function(lesTasks){

            res.render('tasks',{listeNoms: lesTasks})
        }
    );
};


//Display One Task find by id
exports.task_detail = function(req, res, next) {
    taskPgDAO.getTaskFromId(req.params.id,
        function(uneTask){
            res.send("l'utilisateur "+ req.params.id+ " s'appelle "+ uneTask.nom);
        }
    )
};


// Handle Task create on POST
exports.task_ajout_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Task add');
};