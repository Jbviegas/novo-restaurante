import { produtos } from "../data/data-produtos.js";

export const retornarProdutos = () => {//fução que retorna todos os produtos
    return produtos;
};

export const buscarProduto = (textoDigitado) => {//a função buscarProduto recebe como parâmetro o texto digitado na barra de busca
    return produtos.filter((produto) => produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        /*Filter irá criar um novo array a partir do array de produtos importado da pasta "data" só com os nomes dos produtos através de produto.nome
         e depois através do método includes irá verificar se nesse novo array existe um nome igual ao texto digitado que foi o valor passado como parâmetro 
         pra função  buscarProduto.
        
         O Metodo nativo de strings toLowerCase tranforma tanto os nomes que vieram da coleção de produtos e formaram um novo array através da função filter 
          quanto o nome passado como parâmetro da função buscarProduto em letras minusculas para que assim a pesquisa possa ser feita tanto com letras
          maiúsculas quanto minúsculas */
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase()) ||//pesquisa por descricao segue o mesmo pricipio da pesquisa por nome
        produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase())//pesquisa por categoria segue o mesmo pricipio da pesquisa por nome
    );
};

export const filtrarProdutos = (categoria) => {// Vai filtrar o produto pela sua categoria
    return produtos.filter((produto) => produto.categoria === categoria);
    /* Vai criar um novo array a partir da coleção de produtos só com a categiria de cada produto e depois vai verificar se nesse novo array de 
    categorias tem alguma categoria igual a categoria passada como parâmetro da função filtrarProdutos, nesse caso a busca será feita por botões por isso
    não é necessário usar o método tolowerCasa para transformar as letras em minúsculas*/
};


export const produtosEntradas = filtrarProdutos("Entradas");// produtosEntradas vai filtrar os produtos pelas suas entradas.