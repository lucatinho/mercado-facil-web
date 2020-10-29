export interface Product{
    idProduto?: number
    idMercado?: number
    nomeProduto: string
    descricao?: string
    quantidade: number,
    imgProduto?: string,
    preco?: number,
    ativo?: boolean,
    marca:{
        idMarca: number,
        nomeMarca?: string,

      },
      categoria: {
        idCategoria: number,
        nomeCategoria?: string,
      },
      subCategoria:{
        idSubCategoria: number,
        nomeSubCategoria?: string
      }
}