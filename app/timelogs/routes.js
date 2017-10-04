const UserController = require('./controller')
const auth = require('../../middlewares/auth')


exports.setup = function(router) {
  router
  .post('/checkin/', auth, (req, res) => {
    const {sub: userId, type = 1} = req.auth
    UserController.create(userId, type)
    .then(data => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
  .post('/checkout', auth, (req, res) => {
    const {sub: userId, type = 2} = req.auth
    UserController.create(userId, type)
    .then(data => {
      res.status(201).json(data)
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
