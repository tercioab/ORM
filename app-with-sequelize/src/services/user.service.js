const { User } = require('../models');

const getAll = async () => {
    const users = await User.findAll();
    return users;
};

const getById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

const getByIdAndEmail = async (id, email) => {
    const user = await User.findOne({ where: { id, email } });
    return user
}

const createUser = async (fullName, email, phoneNum) => {
    const newUser = await User.create({ fullName, email, phoneNum});

    return newUser;
  };

module.exports = {
    getAll,
    getById,
    getByIdAndEmail,
    createUser,
}