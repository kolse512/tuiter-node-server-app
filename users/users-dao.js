import usersModel from "./users-model.js";
export const findUserById = (uid) => usersModel.findById(uid);
export const findUserByUsername = (username) => usersModel.findOne({ username });
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (uid) => usersModel.deleteOne({_id: uid});
export const updateUser = (uid, user) => usersModel.updateOne({_id: uid}, {$set: user});
export const findUserByCredentials = (username, password) => usersModel.findOne({ username, password });
export const findAllUsers = () => usersModel.find({});