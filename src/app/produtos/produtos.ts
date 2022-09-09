export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    qtdEst: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    qtd: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Produto 1", preco: 123.00, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 10 },
    { id: 2, descricao: "Produto 2", preco: 456.50, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 100 },
    { id: 3, descricao: "Produto 3", preco: 789.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 190 },
    { id: 4, descricao: "Produto 4", preco: 1011.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 15 },
    { id: 5, descricao: "Produto 5", preco: 1213.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 46 },
    { id: 6, descricao: "Produto 6", preco: 1415.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 18 },
    { id: 7, descricao: "Produto 7", preco: 1617.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 27 },
    { id: 8, descricao: "Produto 8", preco: 1819.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 59 },
    { id: 9, descricao: "Produto 9", preco: 2021.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 46 },
    { id: 10, descricao: "Produto 10", preco: 2223.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 20 },
    { id: 11, descricao: "Produto 11", preco: 2425.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 30 },
    { id: 12, descricao: "Produto 12", preco: 147.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 37 },
    { id: 13, descricao: "Produto 13", preco: 258.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 147 },
    { id: 14, descricao: "Produto 14", preco: 369.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 159 },
    { id: 15, descricao: "Produto 15", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "https://via.placeholder.com/1000x1000?text=", qtdEst: 162 }
]