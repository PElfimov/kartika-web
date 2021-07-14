import {Component} from "react"
import styles from "./manufacture.module.css"

interface Props {}

interface Photo {
  title: string
  alt: string
  file: string
  description: string
}

const photos: Photo[] = [
  {
    title: `Печать лицевой и оборотной стороны карт`,
    alt: `Печать карт на супер белом пластике`,
    file: `printingcard`,
    description: `Печать лицевой и оборотной стороны карт`
  },
  {
    title: `Совмещение лицевой и оборотной сторон карт`,
    alt: `Использование специального защитного слоя – ламината`,
    file: `laminat`,
    description: `Мы используем специальный защитный слой – ламинат, который позволяет изображению сохраняться в первозданном виде.`
  },
  {
    title: `Ламинирование`,
    alt: `Ламинатор гидравлический`,
    file: `laminator`,
    description: `Спрессовывание листов пластика и ламината под большим давлением и температурой. Это позволяет карте не расслаиваться`
  },
  {
    title: `Вырубка карт`,
    alt: `Тигельный вырубщик`,
    file: `tigel`,
    description: `Использование пресс-формы вырубщика позволяет изготовить все карты одинакового размера.`
  },
  {
    title: `Проверка карт`,
    alt: `Ручная проверка карт`,
    file: `manualcheck`,
    description: ` Каждая карта проверяется вручную. Будьте уверены, что ни одна бракованная карта не попадет Вам.`
  },
  {
    title: `Упаковка`,
    alt: `Упаковка карт`,
    file: `cardbox`,
    description: `В таких коробках с картами в пути ничего не случится.`
  }
]
export class Manufacture extends Component<Props, {}> {
  render() {
    return (
      <section>
        <div className={styles.inner}>
          <h2 className={styles.title}>Мы делаем карты на собственном оборудовании и не используем заготовки</h2>
          <div className={styles.wrapper}>
            {photos.map((item, index) => {
              let imgUrl: string
              try {
                imgUrl = require(`./img/${item.file}.jpg`).default
              } catch (err) {
                imgUrl = `${item.file}.jpg`
                console.error(`${imgUrl} file not exist`)
              }
              return (
                <figure className={styles.item} key={`${index} ${item.file}`}>
                  <figcaption>{item.title}</figcaption>
                  <span className={styles.number}>{index + 1}</span>
                  <p className={styles.img}>
                    <img src={imgUrl} alt={item.alt} width="450" height="374" />
                  </p>
                  <p className={styles.text}>{item.description}</p>
                </figure>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
