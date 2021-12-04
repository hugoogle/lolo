import CriarCard from "../componentes/criarCard.js";
let hugoogle = [
  {
    imagem: "./imagens/produtos/apontador.jpeg",
    descricao: "Apontador",
    preco: "1.00",
    departamento: "apontador",
  },
  {
    imagem: "./imagens/produtos/doislapis.jpeg",
    descricao: "Lapis",
    preco: "1.00",
    departamento: "lapis",
  },
  {
    imagem: "./imagens/produtos/estojo1.jpeg",
    descricao: "Estojo",
    preco: "3.50",
    departamento: "estojo",
  },
  {
    imagem: "./imagens/produtos/kit.jpeg",
    descricao: "Kit Lapis",
    preco: "3.99",
    departamento: "lapis",
  },
  {
    imagem: "./imagens/produtos/lapiscachorro.jpeg",
    descricao: "Lapis decorado",
    preco: "1.00",
    departamento: "Lapis Decorado",
  },
  {
    imagem: "./imagens/produtos/lapiseira.jpeg",
    descricao: "Lapiseira",
    preco: "1.50",
    departamento: "lapiseira",
  },
  {
    imagem: "./imagens/produtos/lapisflores.jpeg",
    descricao: "Lapis Flores",
    preco: "2.90",
    departamento: "lapis",
  },
  {
    imagem: "./imagens/produtos/postiti.jpeg",
    descricao: "Postiti",
    preco: "0.50",
    departamento: "postiti",
  },
];

const carregarProdutos = () => {
  hugoogle.forEach((produto, indice) =>
    CriarCard(produto.imagem, produto.descricao, produto.preco, indice)
  );
};

export default {
  hugoogle,
  carregarProdutos,
};

