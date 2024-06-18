import Image from 'next/image'

import styles from "./CampoDeBusca.module.css";
import lupa from "../../../public/img/lupa.png";

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }) => {
    return (
        <div className={styles.container}>
            <Image className={styles.icone} src={lupa} alt="icone" />
            <input
                type="text"
                value={textoBuscaDigitado}
                //O valor de value vai ser o valor que for setado através de setTestoBuscaDigitado no useStade de TextoBuscaDigitado
                onChange={(event) => handleBusca(event.target.value)}
                //O valor do evento onChange é o valor passado como parametro da função handleBusca
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    );
};

export default CampoDeBusca;