import styles from './styles.module.css';

export default function NewMessage() {
  return (
    <section className={styles.add__messages}>
      <div className="container">
        <form action="#">
          <div className={styles['add__messages-content']}>
            <textarea
              className={styles['add__messages-text']}
              name="new-message"
              id="new-message"
              rows="5"
            />
            <div className={styles['add__messages-buttons']}>
              <div className={styles['add__messages-file-picture']}>
                <input
                  type="file"
                  accept="image/*"
                  id="file-images"
                  className={styles['add__messages-input']}
                  hidden
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  className={styles['add__messages-picture']}
                  htmlFor="file-images"
                >
                  <img src="./logo/photo.svg" alt="Загрузить фото" />
                </label>
              </div>
              <div className={styles['add__messages-progress']}>
                <div className={styles['progress-container']}>
                  <svg
                    className={styles['progress-circle']}
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className={styles['progress-circle-bg']}
                      cx="50"
                      cy="50"
                      r="45"
                    />
                    <circle
                      className={styles['progress-circle-fill']}
                      cx="50"
                      cy="50"
                      r="45"
                    />
                  </svg>
                  <div className={styles['progress-text']}>0</div>
                </div>
                <button
                  type="button"
                  className={styles['add__messages-submit']}
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
