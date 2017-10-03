const UserModel = require('./model')
const UserSerializer = require('./serializer');

const UserController = {
    async getAll(req, res) {
        try{
            const users = await UserModel.findAll({
              attributes: ['id', 'username', 'isAdmin']
            })
            return users
        }catch(err){
            return err
        }
        
    },
    async get(id) {
      try{
        const user = await UserModel.findById(+id, {
          attributes: ['id', 'username', 'isAdmin']
        })
        return user
      }catch(err){
          return err
      }
    }, 
    async create(username, password, isAdmin = false) {
        try{
            password = await UserModel.hashPassword(password)
            const newUser = new UserModel({username, password, isAdmin})
            const user = await newUser.save()
            return {
                user: UserSerializer.for('create', user),
                accessToken: user.genToken()
            }
        }catch(err){
            return err
        }
    }, 
    async update(id, username, password) {
        try{            
            const user = await UserModel.findById(+id)
            if(!user) {
                 return
            }else{
                user.username = username
                user.password = password
                const updatedUser = await user.save()
                return {user: UserSerializer.for('update', updatedUser)}
            }            
        }catch(err){
            return err
        }
    },
    async destroy(id) {
        try{            
            await UserModel.findByIdAndRemove(+id)
            return true
        }catch(err){
            return err
        }
    }
}

module.exports = UserController;