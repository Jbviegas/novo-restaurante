
import styles from "./Categorias.module.css";

import Image from 'next/image'

import icone1 from "../../../public/img/entrada.png";
import icone2 from "../../../public/img/massa.png";
import icone3 from "../../../public/img/carne.png";
import icone4 from "../../../public/img/bebidas.png";
import icone5 from "../../../public/img/salada.png";
import icone6 from "../../../public/img/sobremesa.png";

const Categorias = ({ handleFiltro, botaoClicado, handleLimparBusca }) => {
    return (
        <section className={styles.secao_categorias}>
            <div className={styles.container_botoes}>
                <button className={botaoClicado === "Menu" ? styles.acenderBtn : styles.apagarBtn}
                    onClick={() => handleLimparBusca("Menu")}>Menu
                </button>

                <button className={botaoClicado === "Entradas" ? styles.acenderBtn : styles.apagarBtn}/* Se botão clicado for o botão da categoria
                 Entradas, acenderá ele e irá colocar como parametro de handleFiltro la no index da pasta pages Entradas*/
                    onClick={() => handleFiltro("Entradas")}>
                    <Image className={styles.icone} src={icone1} alt="ícone" />Entradas
                </button>

                <button className={botaoClicado === "Massas" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Massas")}>
                    <Image className={styles.icone} src={icone2} alt="ícone" />Massas
                </button>

                <button className={botaoClicado === "Carnes" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Carnes")}>
                    <Image className={styles.icone} src={icone3} alt="ícone" />Carnes
                </button>

                <button className={botaoClicado === "Bebidas" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Bebidas")}>
                    <Image className={styles.icone} src={icone4} alt="ícone" />Bebidas
                </button>

                <button className={botaoClicado === "Saladas" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Saladas")}>
                    <Image className={styles.icone} src={icone5} alt="ícone" />Saladas
                </button>

                <button className={botaoClicado === "Sobremesas" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Sobremesas")}>
                    <Image className={styles.icone} src={icone6} alt="ícone" />Sobremesas
                </button>
            </div>
        </section>
    );
};
export default Categorias;