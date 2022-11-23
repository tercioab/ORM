const { User } = require('../models');

const getAll = async () => {
    const users = await User.findAll();
    return users;
};

const getById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

module.exports = {
    getAll,
    getById,
}