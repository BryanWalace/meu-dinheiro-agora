import React from 'react';
import styles from './CtaSection.module.css';
import ctaImage from '../../assets/cta-image.png';

function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2>Quer <br/> conquistar <br/> seu carro ou <br/> sua casa?</h2>
          <p>
            Seu sonho não precisa ser adiado pelos juros de um financiamento.
            O consórcio é a melhor opção!
          </p>
          <button className={styles.ctaButton}>Falar com um especialista agora</button>
        </div>

        <div className={styles.rightColumn}>
          <img src={ctaImage} alt="Planejamento financeiro em cima de uma mesa" className={styles.image} />
          <div className={styles.calloutBox}>
            <p>
              Transforme o valor da entrada em lance no consórcio e dê o primeiro
              passo para conquistar veículo ou casa própria, <strong>pagando menos</strong> e{' '}
              <strong>de forma inteligente</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;