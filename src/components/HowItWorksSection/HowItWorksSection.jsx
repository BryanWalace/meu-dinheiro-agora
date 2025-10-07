import React from 'react';
import styles from './HowItWorksSection.module.css';

import howItWorksImage from '../../assets/how-it-works-image.png';
import iconArrowRight from '../../assets/icons/icon-arrow-right.svg';
import iconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import greenBlobRight from '../../assets/blob-how-it-works-right.svg';

const steps = [
  'Escolha o valor da carta de crédito',
  'Defina o prazo e a parcela ideal',
  'Participe das assembleias mensais',
  'Seja contemplado por sorteio ou lance',
];

function HowItWorksSection() {
  return (

    <section className={styles.section}>
      <img src={greenBlobRight} alt="" className={styles.greenBlobRight} />
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2>Como funciona?</h2>
          <p>Simples, transparente <br/> e sem complicação.</p>
          {steps.map((step) => (
            <div key={step} className={styles.step}>
              <span>{step}</span>
              <img src={iconArrowRight} alt="Seta" className={styles.arrowRight} />
              <img src={iconArrowDown} alt="Seta" className={styles.arrowDown} />
            </div>
          ))}
        </div>
        <div className={styles.rightColumn}>
          <img src={howItWorksImage} alt="Homem dirigindo feliz" className={styles.image} />
          <button className={styles.ctaButton}>Simular consórcio</button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;