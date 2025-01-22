fetch('../../data/dados.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao carregar o JSON");
    }
    return response.json();
  })
  .then(data => {
    console.log("Dados carregados: ", data);

    let produto = data.produtos.find((p)=> p.id == id);

    titleProduct.innerHTML = produto.nome;
    priceProduct.innerHTML = produto.preco;
    descricaoProduct.innerHTML = produto.descricao;

    productImage.src = produto.imagem;
  })
  .catch(error => console.error(error));



let id = document.location.search.split('=')[1];
const productImage =  document.getElementById('productImage');
const titleProduct = document.getElementById('titleProduct');
const priceProduct = document.getElementById('priceProduct');
const descricaoProduct = document.getElementById('descricaoProduct');






