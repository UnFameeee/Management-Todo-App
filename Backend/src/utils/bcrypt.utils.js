const bcrypt = require("bcryptjs");
require("dotenv").config();

const Bcrypt = {};
const salt = parseInt(process.env.BCRYPT_SALT);

Bcrypt.encode = async (password) => {
    return bcrypt.hash(password, salt);
}

Bcrypt.compare = async (password, hashedPasword) =>{
    return await bcrypt.compare(password, hashedPasword);
}

module.exports = Bcrypt;