const Controller = require('./controller')

exports.setup = function(router) {
    router.post('/', (req, res) => {
        const {username, password} = req.body
        Controller.login(username, password)
        .then(data => {
          if(data.user.errors){
            res.status(401).json(data)
          }
          res.status(201).json(data)
        })
        .catch((err) => {
          res.status(500).json({status: 500, message: err.message || err})
        })
      }
    )
}