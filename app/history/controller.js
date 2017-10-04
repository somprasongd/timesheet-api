const TimelogModel = require('../timelogs/model')
const HistorySerializer = require('./serializer');

const HistoryController = {
    async getAll() {
        try{
            const timelogs = await TimelogModel.findAll()
            return {timelogs: TimelogSerializer.for('getAll', timelogs)}
        }catch(err){
            return err
        }
        
    },
    async get(id) {
      try{
        const timelog = await TimelogModel.findById(+id)
        return {timelog: TimelogSerializer.for('get', timelog)}
      }catch(err){
          return err
      }
    }
}

module.exports = HistoryController;