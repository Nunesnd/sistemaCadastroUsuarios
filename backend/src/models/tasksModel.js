const connection = require('./conection');

const getAll = async () => {
    const task = await connection.execute('SELECT * FROM tbl_usuarios;');
    return task[0];
};

const createTask = async (task) => {
    const {nome, login, senha, dt_nasc} = task;
    const query = "INSERT INTO tbl_usuarios (nome_usuarios, login_usuarios, passwd_usuarios, data_nasc_usuarios) VALUES (?, ?, ?, STR_TO_DATE(?, '%d/%m/%Y'))";

    const [createdTask] = await connection.execute(query, [nome, login, senha, dt_nasc]);

    return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
    const removeTask = await connection.execute('DELETE FROM tbl_usuarios WHERE id_usuarios = ?', [id]);
    return removeTask;
};

const updateTask = async (id, task) => {
    console.log("Dados recebidos para atualização:", task);

    const fields = [];
    const values = [];

    if (task.nome !== undefined) {
        fields.push('nome_usuarios = ?');
        values.push(task.nome);
    }

    if (task.login !== undefined) {
        fields.push('login_usuarios = ?');
        values.push(task.login);
    }

    if (task.senha !== undefined) {
        fields.push('passwd_usuarios = ?');
        values.push(task.senha);
    }
    
    if (task.dt_nasc !== undefined) {
        fields.push('data_nasc_usuarios = ?');
        values.push(task.dt_nasc);
    }

    if (fields.length === 0) {
        throw new Error("Nenhum campo para atualizar.");
    }

    const query = `UPDATE tbl_usuarios SET ${fields.join(', ')} WHERE id_usuarios = ?`;
    values.push(id);

    const [updatedTask] = await connection.execute(query, values);
    return updatedTask;
};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};