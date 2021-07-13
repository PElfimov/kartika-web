import {Component} from "react"
import styles from "./faq.module.css"

interface Props {}
export class Faq extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.inner}>
          <form className={styles.form}>
            <fieldset className={styles.wrapper}>
              <legend className={styles.title}>Часто задаваемые вопросы</legend>
              <label className={styles.question} htmlFor="faq-calculate">
                1. Как рассчитывается стоимость, если в одном заказе несколько макетов карт?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-calculate" />
              <p className={styles.answer}>
                Стоимость считается исходя из общего количества карт в заказе, независимо от количества макетов.
              </p>
              <label id="free-shipping" className={styles.question} htmlFor="faq-delivery">
                2. Как осуществляется доставка карт?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-delivery" />
              <p className={styles.answer}>
                Доставка карт осуществляется бесплатно до склада транспортной компании в вашем городе.
              </p>
              <label className={styles.question} htmlFor="faq-44">
                3. Что означает «4+4» и «4+0»?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-44" />
              <p className={styles.answer}>
                Эти цифры обозначают цветность (красочность) полиграфической продукции. Первая цифра указывает на
                количество красок на лицевой стороне, вторая – на обороте.
                <br />
                Таким образом,
                <br />
                4+4 – полноцветная двухсторонняя печать карт
                <br />
                4+0 – полноцветная печать с одной стороны карты
              </p>
              <label className={styles.question} htmlFor="faq-size-card">
                4. Какие размеры и толщина пластиковой карты?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-size-card" />
              <p className={styles.answer}>
                Длина пластиковой карты - 86 мм, ширина - 54 мм. Мы изготавливаем два вида карт по толщине: такие же,
                как банковские – 0,76 мм, и тонкие карты – 0,46 мм (рекомендуем для изготовления визиток).
              </p>
              <label className={styles.question} htmlFor="faq-guarantee">
                5. Насколько долговечно изображение на пластиковой карте?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-guarantee" />
              <p className={styles.answer}>
                Мы используем специальный защитный слой – ламинат, который позволяет изображению сохраняться в
                первозданном виде. И мы даем ПОЖИЗНЕННУЮ ГАРАНТИЮ на наши карты!
              </p>
              <label className={styles.question} htmlFor="faq-shagren">
                6. Что такое покрытие «шагрень» и сколько оно стоит?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-shagren" />
              <p className={styles.answer}>
                Шагрень – это вид покрытия (ламинации) пластиковых карт, который практически не царапается и давно уже
                получил популярность среди наших клиентов. Нецарапающееся покрытие пластиковых карт (шагрень) мы делаем
                по цене обычных (глянцевых или матовых) карт.
              </p>
              <label className={styles.question} htmlFor="faq-hico-barcode">
                7. Что лучше: магнитная полоса или штрих-код?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-hico-barcode" />
              <p className={styles.answer}>
                Функциональное значение у карт с магнитной полосой и штрих-кодом одинаковое – для идентификации
                клиентов. В любом случае вам нужно будет специальное оборудование (сканер штрих-кода или считыватель
                магнитной полосы) и программное обеспечение. Мы рекомендуем применять штрих-код, т.к карты стоят дешевле
                и проще в использовании.
              </p>
              <label className={styles.question} htmlFor="faq-use">
                8. Как можно применить дисконтные карты, если нет оборудования для считывания магнитных полос или
                штрих-кодов?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-use" />
              <p className={styles.answer}>
                Мы рекомендуем сделать дисконтные карты с фиксированной скидкой, например: 5%, 7%, 10%, и нумерацией,
                для учета выданных карт клиентам.
              </p>
              <label className={styles.question} htmlFor="faq-indent" id="indent-seal">
                9. Что такое индент-печать?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-indent" />
              <p className={styles.answer}>
                Индент-печать - процесс, обратный эмбоссированию. Символы при индент-печати не выдавливаются, а,
                наоборот, вдавливаются в пластик. При этом, в отличии от эмбоссирования, на задней стороне карты не
                остается никаких следов. Индент-печать отличается очень высокой износостойкостью.
              </p>
              <label className={styles.question} htmlFor="faq-warranty" id="lifetime-warranty">
                10. Что значит пожизенная гарантия?
              </label>
              <input className={styles.radio} type="radio" name="radio-faq" id="faq-warranty" />
              <p className={styles.answer}>
                Мы обязуемся исправить любое количество бракованных карт пока хотя-бы одна карта находиться у вас на
                руках.
              </p>
            </fieldset>
          </form>
        </div>
      </section>
    )
  }
}
