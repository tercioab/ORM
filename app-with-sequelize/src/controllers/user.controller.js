const UserService = require('../services/user.service');

const ERROR_MESSAGE = 'Algo deu errado';
const ERROR_FIND_USER = 'Usuario não encontrado';

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
        if (!userId) return res.status(404).json({ message: ERROR_FIND_USER });
        return res.status(201).json(userId)

    } catch (e) {
        console.log(e.message);
        res.status(500).json({message: ERROR_MESSAGE })
    }
}

const getByIdAndEmail = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.query;
        const user = await UserService.getByIdAndEmail(id, email);
        if (!user) return res.status(404).json({ message: ERROR_FIND_USER });
        return res.status(201).json(user);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: ERROR_MESSAGE })
    }
};

const createUser = async (req, res) => {
    try {
      const { fullName, email, phoneNum } = req.body;
      const newUser = await UserService.createUser(fullName, email, phoneNum);
  
      return res.status(201).json(newUser);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: ERROR_MESSAGE });
    }
};
  
const updateUser = async (req, res) => {
    try {
      const { fullName, email, phoneNum } = req.body;
      const { id } = req.params;
      const updatedUser = await UserService.updateUser(id, fullName, email, phoneNum);
  
      if (!updatedUser) return res.status(404).json({ message: ERROR_FIND_USER });
  
      return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });    
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: ERROR_MESSAGE });
    }
};
  
const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
  
      return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: ERROR_MESSAGE });
    }
  };
  

module.exports = {
    getAll,
    getById,
    getByIdAndEmail,
    createUser,
    updateUser,
    deleteUser,
}