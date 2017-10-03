const UserController = require('./controller')


exports.setup = function(router) {
  router
  .get('/:id', (req, res) => {
    const {id} = req.params
    UserController.get(id)
    .then((data) => {
      res.json({user: data})
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
  .get('/', (req, res) => {
    UserController.getAll()
    .then((datas) => {
      res.json({users: datas})
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
  .post('/', (req, res) => {
    const {username, password, isAdmin = false} = req.body
    UserController.create(username, password, isAdmin)
    .then(data => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
  .put('/:id', (req, res) => {
    const {username, password} = req.body
    UserController.update(req.params.id, username, password)
    .then(data => {
      if(!data){
        res.status(404).json({status: 404, message: 'user not found'});
      }
      res.json(data)
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
  .delete('/:id', (req, res) => {
    UserController.destroy(req.params.id)
    .then(success => {
      if(success) {
        res.status(204).end();
      }
      throw new Error('can not delete user')
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
}
