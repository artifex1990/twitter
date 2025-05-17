import Button from '../ui/Button/Button';
import styles from './styles.module.css';

export default function AuthManager({ title }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.register}>
        <Button active>Зарегистрироваться</Button>
        <Button>Войти</Button>
      </div>
    </>
  );
}
