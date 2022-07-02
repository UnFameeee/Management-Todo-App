const User = require('../models/user.model')
const UserRepository = {};

UserRepository.findUserByEmail = async (email) => {
    return await User.findOne({where: {email: email}});
};

UserRepository.createNewUser = async (newUser) => {
    await User.create(newUser);
};

UserRepository.findUserById = async (userId) => {
    return await User.findOne({ where: { id: userId } });
}

UserRepository.updateUserById = async (userId, userData) => {
    await User.update(
        { username: userData.username },
        { where: { id: userId } }
    )
};

UserRepository.updateUserPasswordById = async (userId, hashPw) => {
    await User.update(
        { password: hashPw },
        { where: { id: userId } }
    )
}

module.exports = UserRepository;