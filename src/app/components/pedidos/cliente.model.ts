export interface Clientes{
    
    idCliente: number,
        email: string,
        nome?: string,
        observacao?: string,
        situacao?: string,
        permiteLogin?: string,
        dataNascimento?: Date,
        cep?: string,
        celular?: string,
        mercadoFavorito?: string
        endereco: [
            {
                idEndereco: number,
                rua: string,
                numero: string,
                bairro: string,
                complemento: string,
                cidade: string,
                estado: string,
                cep: string,
                principal: string
            }
        ]
}