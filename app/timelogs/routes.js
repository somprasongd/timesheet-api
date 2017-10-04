const UserController = require('./controller')
const auth = require('../../middlewares/auth')


exports.setup = function(router) {
  router
  .post('/checkin/:userId/', auth, (req, res) => {
    console.log(req.auth)
    const {userId, type = 1} = req.params
    UserController.create(userId, type)
    .then(data => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
  .post('/checkout/:userId/', auth, (req, res) => {
    const {userId, type = 2} = req.params
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
