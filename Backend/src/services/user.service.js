const LogService = require("./log.service");
const Bcrypt = require("../utils/bcrypt.utils");
const UserRepository = require("../repository/user.repository");
const dataResponse = require("../utils/dataResponse.utils");

module.exports.addUser = async (userData) => {
  let DataReturn = {};
  try {
    if (userData.email === undefined) throw new Error("No email found");
    const existUser = await UserRepository.findUserByEmail(userData.email);
    if (existUser) throw new Error("User already exists");

    const newUser = {
      ...userData,
      password: await Bcrypt.encode(userData.password)
    };
    await UserRepository.createNewUser(newUser);

    await LogService.createLog(newUser.id, {info: `Create user with email ${newUser.email} successfully`});

    DataReturn = dataResponse(201, "success", "Create Successfully", newUser);

  } catch (err) {
    DataReturn = dataResponse(400, "fail", err.message);
  } finally {
    return DataReturn;
  }
};

module.exports.checkUser = async (userData) => {
  let DataReturn = {};
  try {
    const user = await UserRepository.findUserByEmail(userData.email);
    if (!user) throw new Error(`Not found User with email ${userData.email}`);

    if (!await Bcrypt.compare(userData.password, user.password)) throw new Error("Password does not match");

    DataReturn = dataResponse(201, "success", "Correct", user);

    await LogService.createLog(user.id, {
      info: `User ${user.username} login to system`
    })
  } catch (err) {
    DataReturn = dataResponse(400, "fail", err.message);
  } finally {
    return DataReturn;
  }
};

module.exports.updateUserInfo = async (userId, userData) => {
  let DataReturn = {};
  try {
    const user = await UserRepository.findUserById(userId);
    if(!user) throw new Error("User does not exist");
    else if(user.email !== userData.email) throw new Error("Email does not match");

    await UserRepository.updateUserById(userId, userData);
    DataReturn = dataResponse(201, "success", "User Updated Successfully");

    await LogService.createLog(user.id, {
      info: `User ${user.username} update info`
    })

  } catch (err) {
    DataReturn = dataResponse(400, "fail", err.message)
  } finally {
    return DataReturn;
  }
};

module.exports.updateUserPassword = async (userId, userData) => {
  let DataReturn = {};
  try {
    const user = await UserRepository.findUserById(userId);
    if (!user) throw new Error("User does not exist");
    else if (!Bcrypt.compare(userData.oldPassword, user.password)) throw new Error("Old Password does not match");
    
    const newPasswordHashed = await Bcrypt.encode(userData.newPassword);
    await UserRepository.updateUserPasswordById(userId, newPasswordHashed);
    DataReturn = dataResponse(201, "success", "Update Password Successfully");

    await LogService.createLog(user.id, {
      info: `User ${user.username} update password`
    })
  } catch (err) {
    DataReturn = dataResponse(400, "fail", err.message);
  } finally {
    return DataReturn;
  }
};

module.exports.viewUsersWithTask = async() => {
  let DataReturn = {};
  try {
    const data = await UserRepository.findUsersWithTaskById();   
    if(data.id = 1) data.shift();
    console.log(data)
    data.forEach(element => {
      element.id = element.id.toString();
      element.tasks.forEach(ele => {
        ele.dataValues.id = ele.dataValues.id.toString();
      })
    });
    DataReturn = dataResponse(200, "success", "Success", data || []);
  } catch (err){
    DataReturn = dataResponse(400, "fail", err.message);
  } finally {
    return DataReturn;
  }
}

module.exports.getAllUser = async() => {
  let DataReturn = {};
  try {
    const users = await UserRepository.getAllUser();
    DataReturn = dataResponse(200, "success", "Success", users);
  } catch (err){
    DataReturn = dataResponse(400, "fail", err.message);
  } finally {
    return DataReturn;
  }
}

module.exports.getUserInfo = async(userId) => {
  let DataReturn = {};
  try{
    const user = await UserRepository.findUserById(userId);
    if(!user) throw new Error("User does not exist");
    console.log(user);
    DataReturn = dataResponse(200, "success", "Success", user);
  }catch (err){
    DataReturn = dataResponse(400, "fail", err.message);
  } finally {
    return DataReturn;
  }
}