import {Component} from "react"
import styles from "./order.module.css"

interface Props {}
export class Order extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div>
          <form className={styles.form}>
            <fieldset id="request-for-settleme" className="form">
              <h2 className={styles.title}>Оставьте заявку на расчет стоимости</h2>
              <p>и наш менеджер рассчитает стоимость вашего заказа</p>
              <p className={styles.line}>
                <input type="text" name="user-name" id="leave-request-name" placeholder="Введите имя" required />
                <input type="tel" name="phone-number" id="leave-request-tel" placeholder="Введите телефон" required />
                <input
                  type="email"
                  name="user-mail"
                  id="leave-request-email"
                  placeholder="Введите электронную почту"
                  required
                />
              </p>
              <p className={styles.line}>
                <select name="plastic" id="leave-request-plastic" defaultValue={"Выберите пластик"}>
                  <option disabled selected>
                    Выберите пластик
                  </option>
                  <option value="Белый пластик">Белый пластик</option>
                  <option value="Золотой пластик">Золотой пластик</option>
                  <option value="Серебряный пластик">Серебряный пластик</option>
                  <option value="Прозрачный пластик">Прозрачный пластик</option>
                </select>
                <select name="surface" id="leave-request-surface">
                  <option disabled selected>
                    Выберите покрытие
                  </option>
                  <option value="Глянцевое">Глянцевое</option>
                  <option value="Матовое">Матовое</option>
                  <option value="Шагрень">Шагрень</option>
                </select>
                <input
                  type="number"
                  name="summ-card"
                  id="leave-request-summ-card"
                  placeholder="Предполагаемый тираж"
                  required
                />
              </p>
              <div className={styles.wrapper}>
                <div className={styles.inner}>
                  <p className="leave-request-form__text">Выберите толщину карты:</p>
                  <label className="leave-request-form__check-box">
                    <input type="radio" name="card-thickness" value="0.46" checked />
                    0,46мм (тонкая карта)
                  </label>
                  <label className="leave-request-form__check-box">
                    <input type="radio" name="card-thickness" id="card-thickness-076" value="0.76" />
                    0,76мм (толстая карта)
                  </label>
                </div>
                <div className={styles.inner}>
                  <p className="leave-request-form__text">Выберите тип печати:</p>
                  <label className="leave-request-form__check-box">
                    <input type="radio" name="print-type" value="4+4" checked />
                    4+4 (двухсторонняя)
                  </label>
                  <label className="leave-request-form__check-box">
                    <input type="radio" name="print-type" value="4+0" />
                    4+0 (односторонняя)
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="leave-request-form__part2">
              <legend className="leave-request-form__legend">
                <h3 className="leave-request-form__title2">Виды персонализации:</h3>
              </legend>
              <div className="types-personalization__wrapper">
                <div className="types-personalization__inner   types-personalization__inner--hico">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="hico"
                    id="types-personalization-hico"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-hico" tabIndex={0}>
                    Магнитная полоса
                  </label>
                </div>
                <div className="types-personalization__inner   types-personalization__inner--barcode">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="barcode"
                    id="types-personalization-barcode"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-barcode">
                    Штрих-код
                  </label>
                </div>
                <div className="types-personalization__inner   types-personalization__inner--scratch">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="scratch"
                    id="types-personalization-scratch"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-scratch">
                    Скретч-полоса
                  </label>
                </div>
                <div className="types-personalization__inner types-personalization__inner--emboss">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="emboss"
                    id="types-personalization-emboss"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-emboss">
                    Эмбоссирование
                  </label>
                </div>
                <div className="types-personalization__inner types-personalization__inner--signature-band">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="signature-band"
                    id="types-personalization-signature-band"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-signature-band">
                    <span>Полоса для подписи</span>
                  </label>
                </div>
                <div className="types-personalization__inner   types-personalization__inner--variable-numbering">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="variable-numbering"
                    id="types-personalization-variable-numbering"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-variable-numbering">
                    Переменная нумерация
                  </label>
                </div>
                <div className="types-personalization__inner   types-personalization__inner--sublimation">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="sublimation"
                    id="types-personalization-sublimation"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-sublimation">
                    Сублимацион- ная печать
                  </label>
                </div>
                <div className="types-personalization__inner types-personalization__inner--indent">
                  <input
                    type="checkbox"
                    className="types-personalization__input"
                    name="indent"
                    id="types-personalization-indent"
                  />
                  <label className="types-personalization__label" htmlFor="types-personalization-indent">
                    Индент печать
                  </label>
                </div>
                <div className="types-personalization__chip">
                  <p className="types-personalization__chip-title">Наличие чипа:</p>
                  <div className="types-personalization__chip-wrapper">
                    <label className="types-personalization__smartcard">
                      <input type="radio" name="smartcard" value="without" checked />
                      Без чипа
                    </label>
                    <label className="types-personalization__smartcard">
                      <input type="radio" name="smartcard" value="emarine" />
                      EMarine
                    </label>
                    <label className="types-personalization__smartcard">
                      <input type="radio" name="smartcard" value="mifare" />
                      Mifare
                    </label>
                    <label className="types-personalization__smartcard">
                      <input type="radio" name="smartcard" value="icode" />
                      Icode
                    </label>
                  </div>
                </div>
                {/* <label className="types-personalization__layout">
              <input type="file" className="types-personalization__file-input" name="maket" id="card-maket"/>
              <span>Загрузить макет...</span>
            </label> */}
              </div>
              <textarea
                className="types-personalization__text-user"
                name="text-user"
                id="types-personalization-text-user"
                rows={8}
                cols={80}
                placeholder="Коментарий к заказу"></textarea>
              <input
                className="leave-request-main__checkbox-input"
                type="checkbox"
                name="check-politik"
                value="enabled"
                id="leave-request-main__checkbox-input"
                required
              />
              <label className="leave-request-main__checkbox" htmlFor="leave-request-main__checkbox-input">
                <p className="leave-request-main__text leave-request-main__text--checkbox">
                  Я соглашаюсь на передачу персональных данных согласно
                  <a
                    className="leave-request-main__text leave-request-main__text--link"
                    href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
                    пользовательскому соглашению
                  </a>
                  и
                  <a
                    className="leave-request-main__text leave-request-main__text--link"
                    href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
                    политике конфиденциальности
                  </a>
                  данного сайта
                </p>
              </label>
              <input className="btn btn--leave-request-form" type="submit" value="Расчитать стоимость " />
            </fieldset>
          </form>
        </div>
      </section>
    )
  }
}
