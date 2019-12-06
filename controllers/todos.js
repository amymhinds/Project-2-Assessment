var Todo = require('../models/todo');

module.exports = {
    index, 
    create, 
    delete: delTodo
  };

  function index(req, res) {
    Todo.find({}, function(err, todos) {
      res.render('todos/index', {todos});
    });
  }

function create(req, res){
  Todo.create(req.body, function(err, todos) {
          todos.save(function(err){
                  res.redirect('/todos')
              });
});
}

function delTodo(req, res){
  Todo.findByIdAndDelete(req.params.id, function(err, todo){
    res.redirect('/todos');
  })
}
