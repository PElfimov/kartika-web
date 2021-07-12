import {Component} from "react"
import styles from "./catalog.module.css"

interface Item {
  name: string
  fileName: string
}

interface Props {}
export class Catalog extends Component<Props, {}> {
  render() {
    let name: Item[] = [
      {name: "Дисконтные карты", fileName: "discount"},
      {name: "Подарочные сертификаты", fileName: "certificate"},
      {name: "Клубные карты", fileName: "clubcards"},
      {name: "Бонусные карты", fileName: "bonuscard"},
      {name: "Пластиковые меню", fileName: "plasticmenu"},
      {name: "Подставки под бокалы", fileName: "birdeqel"},
      {name: "Карты доступа", fileName: "microprox-tag"},
      {name: "Карманные календари", fileName: "calendar"}
    ]
    return (
      <section id="catalog" className={styles.root}>
        <div className={styles.inner}>
          <h2>Типы продукции</h2>
          <div className={styles.gallery}>
            {name.map((item) => {
              let imgUrl = require(`./img/${item.fileName}.jpg`).default
              return (
                <figure className={styles.item} key={item.name}>
                  <p>
                    <img src={imgUrl} alt={item.name} width="306" height="204" />
                  </p>
                  <figcaption>{item.name}</figcaption>
                </figure>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
