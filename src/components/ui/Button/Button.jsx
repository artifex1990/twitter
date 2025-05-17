import styles from './styles.module.css';

export default function Button({ children, active }) {
  const className = !active
    ? styles.button
    : `${styles.button} ${styles.active}`;

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
