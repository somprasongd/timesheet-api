const Sequelize = require('sequelize')
const {db: sequelize} = require('../../config')

const User = sequelize.define('t_user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING, 
    allowNull: false, 
    unique: true
  },
  password: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN, 
    allowNull: false,
    field: 'is_admin'
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  console.log('asdads')
  // Table created
  return User.create({
    username: 'admin',
    password: '1234',
    isAdmin: true
  });
});

User.Instance.prototype.hashPassword = function (password) {
  return new Promise((resolve, reject) => {
      const saltRound = 10; // คือจำนวนรอบในการทำงานผ่านอัลกอริทึมใน bcrypt 10 = 2 ยกกำลัง 10 รอบ
      bcrypt.hash(password, saltRound, (err, hash) => {
          if(err){
              reject(err);
          }else{
              resolve(hash);
          }            
      });
  });
};

User.Instance.prototype.authenticate = function (password) {
  return new Promise((resolve, reject) => {
      const hash = this.password;
      bcrypt.compare(password, hash, (err, isValid) => {
          if(err) {
              reject(err);
          }else{
              resolve(isValid);
          }
      })
  });
};

User.Instance.prototype.genToken = function () {
  return jwt.sign({
      sub: this.id,
      username: this.username,
      isAdmin: this.isAdmin
  }, config.secret, { expiresIn: '1h' });
};

module.exports = User