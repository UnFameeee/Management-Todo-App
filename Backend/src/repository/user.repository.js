const User = require('../models/user.model');
const Task = require('../models/task.model');
const Status = require('../constants/status.constant');

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

UserRepository.getAllUser = async() => {
    return await User.findAll({ 
        where: {role: 'user'},
        attributes: ['id', 'username']
    });
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

UserRepository.findUserWithTask = async(userId) => {
    return await User.findOne({
        where: { id: userId },
        attributes: ['id', 'username'],
        include: [{
            model: Task, as: "tasks", 
            attributes:['id', 'title'],
            where: { status: Status.READY}
        }]
    })
}

UserRepository.findUsersWithTaskById = async () => {
    const users = await UserRepository.getAllUser();
    const data = await Promise.all(users.map(async (user) => {
        let newData = await UserRepository.findUserWithTask(user.id);
        if (newData) newData = newData.tasks;
        return {
            id: user.id,
            name: user.username,
            tasks: newData || []
        };
    }))
    return data;
}

module.exports = UserRepository;