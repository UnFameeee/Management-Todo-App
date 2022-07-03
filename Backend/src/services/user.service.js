const UserRepository = require("../repository/user.repository");
const dataResponse = require("../utils/dataResponse.utils");
const Bcrypt = require("../utils/bcrypt.utils")

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

    DataReturn = dataResponse("success", "Create Successfully", newUser);
  } catch (err) {
    DataReturn = dataResponse("fail", err.message);
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

    DataReturn = dataResponse("success", "Correct", user);
  } catch (err) {
    DataReturn = dataResponse("fail", err.message);
  } finally {
    return DataReturn;
  }
};

module.exports.updateUserInfo = async (userId, userData) => {
  let DataReturn = {};
  try {
    const user = await UserRepository.findUserById(userId);
    if (user.email !== userData.email) throw new Error("Email does not match");

    await UserRepository.updateUserById(userId, userData);
    DataReturn = dataResponse("success", "User Updated Successfully");
  } catch (err) {
    DataReturn = dataResponse("fail", err.message)
  } finally {
    return DataReturn;
  }
};

module.exports.updateUserPassword = async (userId, userData) => {
  let DataReturn = {};
  try {
    const user = await UserRepository.findUserById(userId);
    if (!user) throw new Error(`User with id: ${userId} does not exist`);

    if (!Bcrypt.compare(userData.oldPassword, user.password)) throw new Error(`Old Password does not match`);

    const newPasswordHashed = await Bcrypt.encode(userData.newPassword);

    

    await UserRepository.updateUserPasswordById(userId, newPasswordHashed);

    DataReturn = dataResponse("success", "Update Password Successfully");
  } catch (err) {
    DataReturn = dataResponse("fail", err.message);
  } finally {
    return DataReturn;
  }
};

module.exports.viewUsersWithTask = async () => {
  let DataReturn = {};
  try {
    const data = await UserRepository.findUsersWithTaskById();
    DataReturn = dataResponse("success", "Success", data || []);
  } catch (err){
    DataReturn = dataResponse("fail", err.message);
  } finally {
    return DataReturn;
  }
}

module.exports.getAllUser = async() => {
  let DataReturn = {};
  try {
    const users = await UserRepository.getAllUser();
    DataReturn = dataResponse("success", "Success", users);
  } catch (err){
    dataReturn = dataResponse("fail", err.message);
  } finally {
    return DataReturn;
  }
}