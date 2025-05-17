import AuthManager from '../AuthManager/AuthManager';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <AuthManager title="Зарегистрируйтесь и узнайте обо всём первым" />
      </div>
    </div>
  );
}
