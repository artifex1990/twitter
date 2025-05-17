import MainLayout from '../../components/layout/MainLayout/MainLayout';

export default function Main() {
  return (
    <>
      <MainLayout />

      <section className="modal" id="register">
        <div className="modal__wrapper">
          <div className="container">
            <div className="modal__content">
              <div className="modal__dash" />
              <h2 className="modal__title">Регистрация</h2>
              <form className="modal__form" action="#">
                <div className="modal__fields">
                  <input
                    className="modal__input"
                    type="email"
                    placeholder="&nbsp;"
                    name="email"
                    autoComplete="username"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="modal__label" htmlFor="email">
                    Электронная почта
                  </label>
                  <div className="modal__error" />
                </div>
                <div className="modal__fields">
                  <input
                    className="modal__input"
                    type="password"
                    placeholder="&nbsp;"
                    name="password"
                    autoComplete="new-password"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="modal__label" htmlFor="password">
                    Пароль
                  </label>
                  <div className="modal__error" />
                </div>
                <div className="modal__fields">
                  <input
                    className="modal__input"
                    type="password"
                    placeholder="&nbsp;"
                    name="repassword"
                    autoComplete="new-password"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="modal__label" htmlFor="repassword">
                    Повторите пароль
                  </label>
                  <div className="modal__error" />
                </div>

                <button type="button" className="button button-register">
                  Зарегистрироваться
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="modal" id="auth">
        <div className="modal__wrapper">
          <div className="container">
            <div className="modal__content">
              <div className="modal__dash" />
              <h2 className="modal__title">Авторизация</h2>
              <form className="modal__form" action="#">
                <div className="modal__fields">
                  <input
                    className="modal__input"
                    type="email"
                    placeholder="&nbsp;"
                    name="email"
                    autoComplete="username"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="modal__label" htmlFor="email">
                    Адрес электронной почты
                  </label>
                  <div className="modal__error" />
                </div>
                <div className="modal__fields">
                  <input
                    className="modal__input"
                    type="password"
                    placeholder="&nbsp;"
                    name="password"
                    autoComplete="password"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="modal__label" htmlFor="password">
                    Пароль
                  </label>
                  <div className="modal__error" />
                </div>
                <button type="button" className="button button-register">
                  Авторизоваться
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
