const HistoryController = require('./controller')

exports.setup = function(router) {
  router
  .get('/:id', (req, res) => {
    const {id} = req.params
    HistoryController.get(id)
    .then((data) => {
      res.json({timelog: data})
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
  .get('/', (req, res) => {
    HistoryController.getAll()
    .then((datas) => {
      res.json({timelogs: datas})
    })
    .catch((err) => {
      res.status(500).json({status: 500, message: err.message || err})
    })
  })
}
