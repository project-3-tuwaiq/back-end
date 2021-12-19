module.exports = function(app) {
    var patientHandlers = require('../Controller/patientController');
    // todoList Routes
    app.route('/tasks')
        .post(patientHandlers.loginRequired, patientHandlers.profile);
    app.route('/auth/register')
        .post(userHandlers.register);
   app.route('/auth/login')
        .post(patientHandlers.login);
};