const UserService = require('../services/user.service');

const ERROR_MESSAGE = 'Algo deu errado'

const getAll = async (_req, res) => {
    try {
        const users = await UserService.getAll();
        return res.status(200).json(users);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: ERROR_MESSAGE })
    }
};

const getById = async (req, res) => {
    
    try {
        const {id} = req.params
        const userId = await UserService.getById(id)
        if (!userId) return res.status(404).json({ message: 'Usuario não encontrado' });
        return res.status(201).json(userId)

    } catch (e) {
        console.log(e.message);
        res.status(500).json({message: ERROR_MESSAGE })
    }
}

module.exports = {
    getAll,
    getById,
}