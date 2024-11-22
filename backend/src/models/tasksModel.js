const connection = require('./conection');

const getAll = async () => {
    const task = await connection.execute('SELECT * FROM tbl_usuarios;');
    console.log('Conexão com o banco com sucesso');
    return task[0];
};

const createTask = async (task) => {
    const {nome, login, senha, dt_nasc, cpf, email} = task;
    const query = "INSERT INTO tbl_usuarios (nome_usuarios, login_usuarios, passwd_usuarios, data_nasc_usuarios, cpf_usuarios, email_usuarios) VALUES (?, ?, ?, STR_TO_DATE(?, '%d/%m/%Y'), ?, ?)";

    const [createdTask] = await connection.execute(query, [nome, login, senha, dt_nasc, cpf, email]);

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

    console.log('conferindo o conteudo de id: ', id)
    console.log('conferindo o conteudo de task.nome: ', task.nome)

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

    if (task.cpf !== undefined) {
        fields.push('cpf_usuarios = ?');
        values.push(task.cpf);
    }

    if (task.email !== undefined) {
        fields.push('email_usuarios = ?');
        values.push(task.email);
    }

    console.log('conferindo array fields: ', fields)
    console.log('conferindo array values: ', values)

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