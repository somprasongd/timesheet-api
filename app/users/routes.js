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
      res.status(500).json({status: 500, message: err.message || err});
    })
  })
  .get('/', (req, res) => {
    UserController.getAll()
    .then((datas) => {
      res.json({users: datas})
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err});
    })
  })
  .post('/', UserController.create)
  .put('/:id', UserController.update)
  .delete('/:id', UserController.destroy)
}
