const validaCampos = (request, response, next) => {

    const { body } = request;

    if (body.nome === undefined) {
        return response.status(400).json({message: 'o campos nome é necessário'});
    }

    if (body.nome === '') {
        return response.status(400).json({message: 'campo nome não pode ser em branco'});
    }

    if (body.login === undefined) {
        return response.status(400).json({message: 'o campos login é necessário'});
    }

    if (body.login === '') {
        return response.status(400).json({message: 'campo login não pode ser em branco'});
    }

    if (body.senha === undefined) {
        return response.status(400).json({message: 'o campos senha é necessário'});
    }

    if (body.senha === '') {
        return response.status(400).json({message: 'campo senha não pode ser em branco'});
    }
    

    next();
};

module.exports = {
    validaCampos,
}
