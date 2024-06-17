import Image from 'next/image';
import Head from 'next/head';
import styles from "../styles/Home.module.css";
import banner from "../../public/Assets/img/banner.png";

import React from 'react';
import { useState } from "react";

import {
  filtrarProdutos,// Fitrar o produto através da sua categoria
  buscarProduto,// Fitrar o produto através do texto digitado
  produtosEntradas,// produtosEntradas vai filtrar os produtos pelas suas entradas.
  retornarProdutos// Retorna todos os produtos
} from "../service/index.js";
import Cards from '../components/Cards'
import Categorias from '../components/Categorias'
import CampoDeBusca from '../components/CampoDeBusca'

export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);// irá colocar no inicio da seção os produtos da categoria entradas

  const [listaDeProdutos, setListaDeProdutos] = useState(retornarProdutos);// irá colocar logo após a seção de entradas todos os produtos

  const [tituloInicio, setTituloInicio] = useState("Entradas");// irá colocar como titulo da sessão inicial de produtos como Entradas

  const [tituloGeral, setTituloGeral] = useState("Cardapio");// irá colocar como titulo da sessão Geral de produtos como Cardapio

  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");// Inicia com a caixa de texto(input) vazia o que mudara apenas ao digitar.     

  const [botaoClicado, setBotaoClicado] = useState("");// Inicia com o botão de categoria "apagado",ou seja sem uma cor de background inicial

  const handleBusca = (textoDigitado) => {//Irá buscar o produto através do texto digitado se o texto for maior ou igual a três
    setTextoBuscaDigitado(textoDigitado);// vai colocar na caixa de texto (input) o texto digitado
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));/*vai colocar no useState de dadosFiltrados o texto digitado através
    de setDadosFiltrados e irá buscar o produto pelo do nome digitado através da função buscarProduto criada na pasta service */
    textoDigitado.length >= 3 && setListaDeProdutos(buscarProduto(""));// irá esconder os produtos, para que apenas os produtos pesquisados apareçam
    setBotaoClicado("");// vai deixar os botês de categorias "apagados".
    setTituloInicio("");// Vai deixar em branco o titulo de início
    setTituloGeral("");// Vai deixar sem titulo geral
    if (textoDigitado === "") {
      setTituloInicio("Entradas");// Vai colocar como titulo de inicio Entradas
      setTituloGeral("Cardapio")// Vai colocar como titulo de Geral Cardapio
      setDadosFiltrados(produtosEntradas);// Vai exibir os produtos de entrada novamente
      setListaDeProdutos(retornarProdutos);// Vai exibir todos os produtos novamente
    }
  }

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");// vai apagar qualquer texto da caixa de texto (input)
    setDadosFiltrados(filtrarProdutos(categoria));/* irá colocar no useState de dadosFiltrados o produto que foi passado como parametro da função
    handleFiltro através da função filtrar produto */
    setListaDeProdutos(filtrarProdutos(""));// irá econder todos os produtos e deixar somente os produtos da categoria selecionada
    setBotaoClicado(categoria);// vai "acender" ou seja colocar uma cor de background no botão da categoria selecionada
    setTituloInicio(categoria);// Vai colocar como titulo de inicio a categoria do produto procurado a categoria
    setTituloGeral("");// Vai deixar sem titulo geral
  };

  const handleLimparBusca = () => {
    setDadosFiltrados(produtosEntradas);// irá mostrar novamente os produtos de entrada
    setListaDeProdutos(retornarProdutos);// irá mostrar novamente todos os produtos da lista de produtos
    setBotaoClicado("");// vai deixar os botês de categorias "apagados".
    setTextoBuscaDigitado("");// vai apagar qualquer texto da caixa de texto (input)
    setTituloInicio("Entradas")// Vai colocar como titulo de inicio Entradas
    setTituloGeral("Cardapio")// Vai colocar como titulo de geral Cardapio
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.containnerBanner}>

          <Image className={styles.imgPrincipal} src={banner} alt="banner" />

          <div className={styles.text}>
            <h1>RESTAURANT</h1>
            <p>
              De pratos clássicos a criações surpreendentes, nosso cardápio é um
              requinte de sabores refinados.
            </p>
          </div>
        </div>
      </header>
      <main className={styles.container_principal}>

        <CampoDeBusca
          // Serve para exibir o texto digitado que foi passado como parâmetro da função handleBusca
          textoBuscaDigitado={textoBuscaDigitado}/* É onde fica a caixa de texto(input) que recebe o texto digitado que começa vazio e muda de
  acordo com o texto digitado passado como parametro da função handleBusca e colocado também como parametro de  setTextoBuscaDigitado */

          handleLimparBusca={handleLimparBusca}// É onde fica o botão Home que irá voltar a tela inicial com as entradas e os demais produtos 

          handleBusca={handleBusca}/*o handleBusca importado da pasta CampoDebusca que recebe como valor o texto digitado passado como parâmetro 
  da função handleBusca */
        /* O handleBusca que foi importado de CampoDeBusca recebe o valor que foi digitado e recebido na função handleBusca então ele irá colocar 
        no useState de dadosFiltrados o texto digitado através de setDadosFiltrados e irá buscar o produto pelo do nome digitado através da função
         buscarProduto criada na pasta service*/
        />

        <Categorias
          handleFiltro={handleFiltro}/* É onde ficam os botôes de categorias que  iram filtrar os produtos pela categoria, a categoria passada como
  parametro de handleFiltro la no index da pasta categorias através do clique do botão, terá seus produtos exibidos em DadosFiltrados */

          handleLimparBusca={handleLimparBusca}/* É onde fica o botão Home que reseta, ou seja voltar a tela inicial,quando Home for passado como
  parametro de handleLimparBusca la no index da pasta categorias através do clique do botão,irá fazer com que a ListaDeProdutos e 
  DadosFiltrados sejam resetados através da função handleLimparBusca*/

          botaoClicado={botaoClicado}/*Serve para acender o botão da categoria que vinher a ser passada como parametro da função handleFiltro,
  porque a categoria passada como parametro de handleFiltro será a mesma categoria passada como parametro de setBotãoClicado que ira setar
  no useState de botaoClicado a mesma categoria passada como parametro de handleFiltro acendendo assim o botão dessa categoria */
        />

        <section className={styles.secao_cards}>
          <div>
            <h2>{tituloInicio}</h2>
          </div>

          <div className={styles.container_cards}>
            {dadosFiltrados.map((produto) => (/* A pricípio irá criar un novo array só com os produtos de entrada ja que produtosEntradas
    que é a função que retorna os produtos de entrada foi colocada como parâmetro inicial de dadosFiltrados no useState dele*/
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>
        </section>

        <section className={styles.secao_cards_produtos}>

          <div>
            <h2>{tituloGeral}</h2>
          </div>

          <div className={styles.container_cards}>
            {listaDeProdutos.map((produto) => (/* A pricípio irá criar un novo array com todos os produtos ja que retornaProdutos que é a função
    que retorna todos os produtos foi colocada como parâmetro inicial de listaDeProdutos no useState dela*/
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>

        </section>
      </main>
    </>
  );
}

