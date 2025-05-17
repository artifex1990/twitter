import Button from '../ui/Button/Button';
import styles from './styles.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.banner__logo}>
          <img src="./logo/logo.svg" alt="логотип" />
        </div>
        <h1 className={styles.banner__title}>
          Оставайся на связи с друзьями, даже когда их нет рядом
        </h1>
        <div className={styles.banner__register}>
          <Button active>Зарегистрироваться</Button>
          <Button>Войти</Button>
        </div>
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
