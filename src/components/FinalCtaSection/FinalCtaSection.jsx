import React from 'react';
import styles from './FinalCtaSection.module.css';
import greenBlobRight from '../../assets/blob-final-cta-right.svg';
import greenBlobLeft from '../../assets/blob-final-cta-left.svg';

function FinalCtaSection() {
  return (
    <section className={styles.section}>
      <img src={greenBlobRight} alt="" className={styles.greenBlobRight} />
      <img src={greenBlobLeft} alt="" className={styles.greenBlobLeft} />
      <div className={styles.container}>
        <h2 className={styles.title}>
          Com o Meu Dinheiro Agora <br/> é <span>assim!</span>
        </h2>
        <p className={styles.text}>
          Criado sob medida para você que busca serviços com praticidade e segurança em cada etapa. Oferecemos a possibilidade de realizar empréstimos e outros tipos de crédito de forma segura e 100% online, com atendimento humanizado e vantagens exclusivas para colocar seus planos em prática com tranquilidade.
        </p>
        <button className={styles.ctaButton}>Solicitar agora</button>
      </div>
    </section>
  );
}

export default FinalCtaSection;