import { useEffect, useState } from 'react';
import getMessages from '../../api/getMessages';
import styles from './styles.module.css';
import convertTime from '../../../public/assets/convert_time';
import fixTime from '../../../public/helpers/fix_time';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessages, setErrorMessages] = useState('');
  async function getMess() {
    try {
      setIsLoading(true);
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      setErrorMessages(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMess();
  }, []);

  return (
    <section className={styles.messages}>
      <h2 className={styles.messages__title}>Последние сообщения</h2>
      <div className={styles.messages__posts}>
        {isLoading && <h2 className="loading">Загружаю контент!</h2>}
        {errorMessages && (
          <div className={styles.messages__error}>{errorMessages}</div>
        )}
        {messages.map((message) => (
          <div key={message.mail} className={styles.messages__wrapper}>
            <div className={styles.messages__post}>
              <div className={styles.messages__avatar}>
                <img src={message.avatar} alt="аватарка" />
              </div>
              <div className={styles.messages__info}>
                <div className={styles.message__user}>
                  <div className={styles.messages__name}>{message.name}</div>
                  <div className={styles.messages__login}>
                    <a href="#">{message.mail}</a>
                  </div>
                  <div className={styles.messages__time}>
                    {convertTime(fixTime(message.date))}
                  </div>
                </div>
                <div className={styles.messages__text}>
                  {message.message}
                  {message.img_message && (
                    <img src={message.img_message} alt="картинка" />
                  )}
                </div>
                <div className={styles.messages__commands}>
                  <div className={styles.messages__command}>
                    <a href="#">
                      <img src="./logo/reply.svg" alt="репост" />
                    </a>
                    <span>{message.quantityReposts}</span>
                  </div>
                  <div className={styles.messages__command}>
                    <a href="#">
                      <img src="./logo/like.svg" alt="лайк" />
                    </a>
                    <span>{message.quantityLike}</span>
                  </div>
                  <div className={styles.messages__command}>
                    <a href="#">
                      <img src="./logo/share.svg" alt="поделиться" />
                    </a>
                    <span>{message.quantityShare}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
