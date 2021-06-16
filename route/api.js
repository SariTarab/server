const router = require('express').Router();
const employee = require('../controllers/employee')

router.get('/getAllEmployee', employee.getAllEmployee);

router.post('/addNewEmployee', employee.addNewEmployee);
module.exports = router;
