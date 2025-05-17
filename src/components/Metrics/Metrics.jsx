import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import getMetrics from '../../api/getMetrics';

export default function Metrics() {
  const [metrics, setMetrics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getDataMetrics = async () => {
    const temp = [];
    const resp = await getMetrics();

    if (resp instanceof Error) {
      setError(resp.message);
      return;
    }

    for (const key in resp) {
      const newMetric = { id: key, value: resp[key], message: '' };

      switch (key) {
        case 'usersRegistr':
          newMetric.message = 'Пользователей зарегистрировано';
          break;
        case 'writMessages':
          newMetric.message = 'Сообщений написано';
          break;
        case 'writToday':
          newMetric.message = 'Написано сегодня';
          break;
        default:
          newMetric.message = 'Метрика не определена!';
          break;
      }

      temp.push(newMetric);
    }

    setMetrics(temp);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      getDataMetrics();
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section className={styles.metrics}>
      {isLoading && <h2 className="loading white">Загружаю контент!</h2>}
      {metrics.map((metric) => (
        <div className={styles.metric} key={metric.id}>
          <h2 className={styles.metric__title}>{metric.value}</h2>
          <div className={styles.metric__description}>{metric.message}</div>
        </div>
      ))}
      {error && <h2 className="error">{error}</h2>}
    </section>
  );
}
