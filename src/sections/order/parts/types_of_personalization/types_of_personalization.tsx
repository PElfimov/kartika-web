import {Component} from "react"
import styles from "./types_of_personalization.module.css"

type Item = {name: string; text: string}

const items: Item[] = [
  {name: `hico`, text: `Магнитная полоса`},
  {name: `barcode`, text: `Штрих-код`},
  {name: `scratch`, text: `Скретч-полоса`},
  {name: `emboss`, text: `Эмбоссирование`},
  {name: `signatureBand`, text: `Полоса для подписи`},
  {name: `variableNumbering`, text: `Переменная нумерация`},
  {name: `sublimation`, text: `Сублимацион- ная печать`},
  {name: `indent`, text: `Индент печать`}
]

const chips: Item[] = [
  {name: `without`, text: `Без чипа`},
  {name: `emarine`, text: `EMarine`},
  {name: `mifare`, text: `Mifare`},
  {name: `icode`, text: `Icode`}
]

interface Props {}
export class TypesOfPersonalization extends Component<Props, {}> {
  render() {
    return (
      <div className={styles.root}>
        {items.map((item, index) => {
          return (
            <div className={`${styles.inner} ${styles[item.name]}`} key={`${index} ${item.name}`}>
              <input type="checkbox" className={styles.input} name={item.name} id={`${index} ${item.name}`} />
              <label className={styles.label} htmlFor={`${index} ${item.name}`} tabIndex={0}>
                {item.text}
              </label>
            </div>
          )
        })}

        <div>
          <p className={styles.title}>Наличие чипа:</p>
          <div className={styles.wrapper}>
            {chips.map((item, index) => {
              return (
                <label className={styles.smartCard} key={`${index}-${item.name}`}>
                  <input type="radio" name={item.name} value={item.name} />
                  {item.text}
                </label>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
