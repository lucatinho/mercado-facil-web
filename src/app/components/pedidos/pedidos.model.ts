export interface Pedido{        
            idPedido?: number,
            endereco?: number,
            cliente: {
                idCliente: number,
                nomeLogin?: string,
                nome?: string,
                observacao?: string,
                situacao?: string,
                permiteLogin?: string,
                dataNascimento?: Date,
                cpf?: string,
                endereco?: string,
                cep?: string,
                celular?: string,
                mercadoFavorito?: string
            },
            mercados: {
                idMercado: number,
                nome?: string,
                nomeMercado?: string,
            },
            formaPagamento: string,
            formaEnvio: string,
            dataPedido: string,
            statusPedido: {
                idStatusPedido: number,
                nomeStatusPedido?: string
            },
            pedidoProdutos: [
                {
                    idPedidoProduto: number,
                    nomeProduto: string,
                    marcaProduto: string,
                    valorUni: number,
                    qtdProduto: number,
                    produto: number
                }
            ]
        
    
}