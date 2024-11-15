const taskModels = require('../models/tasksModel');

const getAll = async (_request, response) => {
    const tasks = await taskModels.getAll();
    return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await taskModels.createTask(request.body);
    return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
    const {id} = request.params;

    await taskModels.deleteTask(id);
    return response.status(204).json();
};

const updateTask = async (request, response) => {
    const { id } = request.params;
    const { nome_usuarios, login_usuarios, passwd_usuarios, data_nasc_usuarios } = request.body;

    console.log('#######################################################');

    console.log(id)
    console.log(request.body)

    console.log('#######################################################');

    try {
        const updatedTask = await taskModels.updateTask(id, { 
            nome: nome_usuarios, 
            login: login_usuarios, 
            senha: passwd_usuarios,
            dt_nasc: data_nasc_usuarios,
        });
        response.status(200).json(updatedTask);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};