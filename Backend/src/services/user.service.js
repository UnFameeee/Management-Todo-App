const bcrypt = require('bcryptjs');

const User = require('../models').users;

module.exports.addUser = async(userData) => {
  let DataReturn = {};
  try{
    if (userData.email === undefined) throw new Error('No email found');

    const existUser = await User.findOne({where: {email: userData.email}});
    if (existUser) throw new Error('User already exists')

    const newUser = {
      ...userData,
      password: await bcrypt.hash(userData.password, 10),
      role: "user"
    }
    
    await User.create(newUser).then(() => {
      DataReturn = {
        status: 'success',
        message: 'Cretae Successful',
        data: newUser
      }
    })
  }
  catch (err){
    DataReturn = {
      status: 'fail',
      message: err.message
    };
  }
  finally {
    return DataReturn;
  }
}

module.exports.checkUser = async(userData) => {
  let DataReturn = {};
  try{
    const user = await User.findOne({where: {email: userData.email}});
    if (!user) throw new Error(`Not found User with email ${userData.email}`);

    const isMatchedPasswrord = await bcrypt.compare(userData.password, user.password);
    if (!isMatchedPasswrord) throw new Error("Password does not match");

    DataReturn = {
      status: 'success',
      message: 'Correct',
      data: user
    }
  }
  catch(err){
    DataReturn = {
      status: 'fail',
      message: err.message
    }
  }
  finally{
    return DataReturn;
  }
}

module.exports.updateUserInfo = async(userId, userData) => {
  console.log(userId, userData);
  let DataReturn = {};
  try{
    const user = await User.findOne({where: {id: userId}});
    if (user.email !== userData.email) throw new Error('Email does not match');

    await User.update({
      username: userData.username
    }, {where: {id: userId}}).then (() => {
      DataReturn = {
        success: 'success',
        message: 'User Updated Successfully'
      }
    })
  }
  catch(err){
    DataReturn = {
      success: 'fail',
      message: err.message
    }
  }
  finally{
    return DataReturn;
  }
}

module.exports.updateUserPassword = async(userId, userData) => {
  let DataReturn = {};
  try{
    const user = await User.findOne({where: {id: userId}});
    if (!user) throw new Error(`User with id: ${userId} does not exist`);

    const isMatchedPasswrord = await bcrypt.compare(userData.oldPassword, user.password);
    if (!isMatchedPasswrord) throw new Error(`Old Password does not match`)

    const newPasswordHashed = await bcrypt.hash(userData.newPassword, 10);
    await User.update({
      password: newPasswordHashed
    }, {where: {id: userId}}).then(() => {
      DataReturn = {
        success: 'success',
        message: 'Update Password Successfully'
      }
    })
  }
  catch (err){
    DataReturn = {
      success: 'fail',
      message: err.message
    }
  }
  finally{
    return DataReturn;
  }
}