const UserModel = require('../users/model')
const UserSerializer = require('./serializer')

const Controller = {     
    async login(username, password) {
        try{
            const user = await UserModel.findOne({where: {'username': username}})
            const isValid = await user.authenticate(password)
            if (isValid) {
                return { 
                    user: UserSerializer.for('login', user),
                    accessToken: user.genToken()
                }
            }else{
                return {
                    user: {
                        errors: 'Invalid credentials'
                    }
                }
            }         
        }catch(err){
            return err
        }
    }
}

module.exports = Controller
