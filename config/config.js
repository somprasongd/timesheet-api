require('dotenv').config() // ถ้าต้องการใช้ .env

module.exports = {
    port: process.env.PORT || 3000, // ถ้าไม่ระบุใน env ให้ใช้ port 3000 แทน
    debug: process.env.NODE_ENV === 'development',
    pgConnection: process.env.PG_CONNECTION,
    secretKey: process.env.SECRET
}