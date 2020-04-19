const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const {nome_par, paroco, vigario, id_resptnd, cidade } = request.body

        //aleatorizando o id da paroquia
        const id_paroquia = crypto.randomBytes(4).toString('HEX');

        await connection('paroquia').insert({
            id_paroquia,
            nome_par,
            paroco,
            vigario,
            id_resptnd,
            cidade
        })
    
        return response.json({ id_paroquia })
    }
}