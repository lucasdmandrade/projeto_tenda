const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const { nome_pessoa, data_nascimento, cpf_pes, id_endereco, fone_cel, fone_res, fone_com, 
            email_pes, data_baixa, 
             cep_end, numero_end, endereco, cidade, estado, bairro} = request.body;

    //randomizando o id da pessoa e o id de seu endereço
    //na forma: 4bts hexadecimal
    const id_pessoa = crypto.randomBytes(4).toString('HEX');
    const id_endereco = crypto.randomBytes(4).toString('HEX')

    //inserindo dados na tabela pessoa
    await connection('pessoa').insert({
        id_pessoa, 
        nome_pessoa,
        data_nasc,
        cpf_pes,
        sexo_pes,
        id_endereco,
        fone_cel,
        fone_res,
        fone_com,
        email_pes,
        dt_baixa,
    })

    //inserindo dados na tabela enredeco
    await connection('endereco').insert({
        id_endereco,
        cep_end, 
        numero_end, 
        endereco, 
        cidade, 
        estado, 
        bairro
    })

    return response.json({ id_pessoa });
    return response.json({ id_endereco });
    }
}