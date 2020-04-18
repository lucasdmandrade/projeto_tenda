const crypto = require('crypto');

module.exports = {
    async create(request, response){

        //**ID_IMAGEM DEVE SER VISTO COMO FUNCIONARA FUTURAMENTE**
        const { cpf_esposo, cpf_esposa, id_comunidade, data_casamento, data_baixa, id_imagem,
        qnt_filho, cpf_filho} = request.body

        //buscando id do esposo atravez do cpf para linkar a pessoa na tabela casal
        const id_esposo = await connection('pessoa')
        .where('cpf_esposo', cpf_pes)
        .select('id_pes')

        //buscando o id da esposa para linkar na tabela casal
        const id_esposa = await connection('pessoa')
        .where('cpf_esposa', cpf_pes)
        .select('id_pes')

        //randomizando o id do casal
        const id_casal = crypto.randomBytes(4).toString('HEX');

        //inserindo dados na tabela casal
        await connection('casal').insert({
            id_casal,
            id_esposo,
            id_esposa,
            id_comunidade,
            data_casamento,
            data_baixa,
            id_imagem,
        })

        //buscando o id do filho na tabela pessoa 
        const id_pessoa = await connection('pessoa')
        .where('cpf_filho', cpf_pes)
        .select('id_pes')

        //randomizando o id do casal
        const id_filho = crypto.randomBytes(4).toString('HEX');

        //inserindo dados na tabela filho
        await connection('filho').insert({
            id_filho,
            id_pessoa,
            id_casal,
        })
        
        module.exports({id_casal})
        module.exports({id_esposo})
        module.exports({id_esposa})
    }
}