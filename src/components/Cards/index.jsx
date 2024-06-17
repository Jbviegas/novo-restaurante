import Image from 'next/image'

import styles from "./Cards.module.css";
const Cards = ({ produto }) => {
    return (
        <div className={styles.container}>
            <figure>
                <Image src={produto.imagem} alt={produto.nome} />
            </figure>
            <div className={styles.container_informacoes}>
                <div>
                    <h3>{produto.nome}</h3>
                    <small>{produto.categoria}</small>
                    <p>{produto.descricao}</p>
                </div>
                <div>
                    <span>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produto.preco)}</span>
                </div>
            </div>
        </div>
    );
};
export default Cards;