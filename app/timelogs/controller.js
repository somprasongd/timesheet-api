const TimelogModel = require('./model')
const TimelogSerializer = require('./serializer');

const TimelogController = {
    async create(userId, type = 1) {
        try{
            const newTimelog = new TimelogModel({userId, type})
            const timelog = await newTimelog.save()
            return {timelog: TimelogSerializer.for('create', timelog)}
        }catch(err){
            return err
        }
    },
    async destroy(id) {
        try{            
            await TimelogModel.findByIdAndRemove(+id)
            return true
        }catch(err){
            return err
        }
    }
}

module.exports = TimelogController;