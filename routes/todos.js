var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');


/* GET users listing. */
router.get('/todos', todosCtrl.index);
router.post('/todos', todosCtrl.create);
router.delete('/todos/:id', todosCtrl.delete);

module.exports = router;
