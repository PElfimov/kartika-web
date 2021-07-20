import {Component} from "react"
import styles from "./order.module.css"
import {Textarea} from "./parts/textarea"
import {TypesOfPersonalization} from "./parts/types_of_personalization"
import {PersonalDataPolicy} from "./parts/personal_data_policy/personal_data_policy"

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
                  <option disabled>Выберите пластик</option>
                  <option value="Белый пластик">Белый пластик</option>
                  <option value="Золотой пластик">Золотой пластик</option>
                  <option value="Серебряный пластик">Серебряный пластик</option>
                  <option value="Прозрачный пластик">Прозрачный пластик</option>
                </select>
                <select name="surface" id="leave-request-surface" defaultValue={" Выберите покрытие"}>
                  <option disabled>Выберите покрытие</option>
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
                  <p className={styles.formText}>Выберите толщину карты:</p>
                  <label className={styles.checkBox}>
                    <input type="radio" name="card-thickness" value="0.46" />
                    {/* checked */}
                    0,46мм (тонкая карта)
                  </label>
                  <label className={styles.checkBox}>
                    <input type="radio" name="card-thickness" id="card-thickness-076" value="0.76" />
                    0,76мм (толстая карта)
                  </label>
                </div>
                <div className={styles.inner}>
                  <p className={styles.formText}>Выберите тип печати:</p>
                  <label className={styles.checkBox}>
                    <input type="radio" name="print-type" value="4+4" /> {/* checked */}
                    4+4 (двухсторонняя)
                  </label>
                  <label className={styles.checkBox}>
                    <input type="radio" name="print-type" value="4+0" />
                    4+0 (односторонняя)
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className={styles.legend}>
                <h3 className={styles.title2}>Виды персонализации:</h3>
              </legend>
              <TypesOfPersonalization />
              <Textarea />
              <PersonalDataPolicy />
              <input className="btn btn--leave-request-form" type="submit" value="Расчитать стоимость " />
            </fieldset>
          </form>
        </div>
      </section>
    )
  }
}
