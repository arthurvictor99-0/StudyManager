const enrollmentController = require('./controllers/enrollmentController');

app.post('/enrollments', enrollmentController.create);