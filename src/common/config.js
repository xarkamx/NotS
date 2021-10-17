const dotEnv = require('dotenv');
dotEnv.config();
module.exports = {
    database:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    }
}