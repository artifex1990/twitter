import AuthManager from '../AuthManager/AuthManager';
import styles from './styles.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.banner__logo}>
          <img src="./logo/logo.svg" alt="логотип" />
        </div>
        <AuthManager title="Оставайся на связи с друзьями, даже когда их нет рядом" />
      </div>
      <div className={styles.banner__slides}>
        <div className={styles.banner__slide}>
          <img
            className={styles.banner__img}
            src="./img/slide_1.jpg"
            alt="картинка 1"
          />
        </div>
      </div>
    </section>
  );
}
