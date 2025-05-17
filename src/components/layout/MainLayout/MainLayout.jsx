import Banner from '../../Banner/Banner';
import Messages from '../../Messages/Messages';
import Metrics from '../../Metrics/Metrics';

function MainLayout() {
  return (
    <>
      <main>
        <Banner />
        <Metrics />
        <Messages />

        <section className="add__messages">
          <div className="container">
            <form className="add__messages-form" action="#">
              <div className="add__messages-content">
                <textarea
                  className="add__messages-text"
                  name="new-message"
                  id="new-message"
                  rows="5"
                />
                <div className="add__messages-buttons">
                  <div className="add__messages-file-picture">
                    <input
                      type="file"
                      accept="image/*"
                      id="file-images"
                      className="add__messages-input"
                      hidden
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      className="add__messages-picture"
                      htmlFor="file-images"
                    >
                      <img src="./logo/photo.svg" alt="Загрузить фото" />
                    </label>
                  </div>
                  <div className="add__messages-progress">
                    <div className="progress-container">
                      <svg className="progress-circle" viewBox="0 0 100 100">
                        <circle
                          className="progress-circle-bg"
                          cx="50"
                          cy="50"
                          r="45"
                        />
                        <circle
                          className="progress-circle-fill"
                          cx="50"
                          cy="50"
                          r="45"
                        />
                      </svg>
                      <div className="progress-text">0</div>
                    </div>
                    <button type="button" className="add__messages-submit">
                      Отправить
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <h1 className="footer__title">
            Зарегистрируйтесь и узнайте обо всём первым
          </h1>
          <div className="footer__register">
            <button type="button" className="button button-register">
              Зарегистрироваться
            </button>
            <button type="button" className="button">
              Войти
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
