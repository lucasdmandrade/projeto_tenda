const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const { id_paroquia, nome_comunidade, cpf_guardiao, data_criacao} = request.body

        //buscando o id do guardião atravez do cpf
        const id_guardiao = await connection('pessoa')
        .where('cpf_guardiao', cpf_pes)
        .select('id_pes')

        //randomizando o id da comunidade
        const id_comunidade = crypto.randomBytes(4).toString('HEX');

        //inserindo dados na tabela comunidade
        await connection('comunidade').insert({ 
            id_comunidade, 
            id_paroquia, 
            nome_comunidade, 
            id_guardiao, 
            data_criacao,
        })

        module.exports({id_comunidade})
    }
}