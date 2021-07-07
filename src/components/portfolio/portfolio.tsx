import {Component} from "react"
import styles from "./portfolio.module.css"
import {Button} from "./parts/button/button"

interface Item {
  name: string
  fileName: string
}

interface Props {}
export class Portfolio extends Component<Props, {}> {
  render() {
    const name: Item[] = [
      {name: "Карта профессионала гипермаркета «М2»", fileName: "m2"},
      {name: "Карта магазина «Burton»", fileName: "burton"},
      {name: "Карта магазина «Шапье»", fileName: "chapie"},
      {name: "Карта магазина «Силуэт»", fileName: "siluet"},
      {name: "Карта горнолыжного комплекса «Авальман»", fileName: "avalman"},
      {name: "Карта магазина обуви «Francesco Donni»", fileName: "francescodonni"},
      {name: "Карта магазина рукоделия «Hand mad»", fileName: "handmad"},
      {name: "Карта магазина ювелирных украшений «Sunlight»", fileName: "sunlight"},
      {name: "Карта магазина «5 Элемент»", fileName: "5element"},
      {name: "Карта магазина «Planet Jens»", fileName: "planetjens"},
      {name: "Карта магазина «Московский ювелирный звод»", fileName: "moscjewfact"},
      {name: "Карта басейна №3 «Адриатика»", fileName: "adriatika"},
      {name: "Карта магазина стильной медицинской одежды «Therapy»", fileName: "therapy"},
      {name: "Карта магазина «Ecco»", fileName: "ecco"},
      {name: "Карта гипермаркета стрительных материалов  «Формула М2»", fileName: "formulam2"},
      {name: "Карта магазина «S`Oliver»", fileName: "soliver"},
      {name: "Карта магазина женской одежды «Лана»", fileName: "lana"},
      {name: "Подставка на стол с именем «Мир тюнига»", fileName: "p1200518"},
      {name: "Подставка на стол со скидкой «ЭПЛ»", fileName: "p1200519"},
      {name: "Карта магазина «Аксиома»", fileName: "aksioma"},
      {name: "Карты с сублимационной печатью", fileName: "calendar"},
      {name: "Карта гостинцы «Сибирь»", fileName: "hotelsibir"},
      {name: "Карта магазина  «По гаммульке»", fileName: "pogramulke"},
      {name: "Карта магазина «Legend»", fileName: "legend"},
      {name: "Карта магазина «Shoes Market»", fileName: "shoesmarket"},
      {name: "Бонусная карта федеральной сети «Гостинец»", fileName: "bonuscard"},
      {name: "Карта магазина «Fit auto»", fileName: "fitauto"},
      {name: "Карта магазина «Mille fa mille»", fileName: "millefamille"},
      {name: "Карта магазина «zoo маркет»", fileName: "zoomarket"},
      {name: "Карта магазина «Lisete»", fileName: "clubcards"},
      {name: "Карта автомагазинов и сервиса «Makk мир аккумуляторов»", fileName: "makk"},
      {name: "Карта магазина садовода «Зеленый дворик»", fileName: "greengarden"},
      {name: "Подарочный сертификат на установку окон «Fogel»", fileName: "certificate"},
      {name: "Карта магазина европейкой обуви «Goergo»", fileName: "goergo"},
      {name: "Карта диагностического центра «Добрый доктор»", fileName: "gooddoctor"},
      {name: "Карта строительного магазина «Метр»", fileName: "metr"},
      {name: "Карта магазина «Садовод Любитель»", fileName: "discount"},
      {name: "Карта хайтек магазина «Эскор»", fileName: "eckor"}
    ]
    return (
      <section id="portfolio" className={styles.root}>
        <h2 className={styles.title}>Портфолио</h2>
        <div className={styles.inner}>
          <Button position={`left`} />
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {name.map((item) => {
                let imgUrl: string
                try {
                  imgUrl = require(`./parts/img/${item.fileName}.jpg`).default
                } catch (err) {
                  imgUrl = `${item.fileName}.jpg`
                  console.log(`${imgUrl} file not exist`)
                }

                return (
                  <li key={item.fileName} className={styles.item}>
                    <img src={imgUrl} alt={item.name} width="404" height="302" />
                  </li>
                )
              })}
            </ul>
          </div>
          <Button position={`right`} />
        </div>
      </section>
    )
  }
}

// var step = "680";
// var list, сlassSection, direction, btn, obj, sumStep,сlassSectionTrue;
// var i = 0;

// function move(obj, сlassSection, direction, shift, sumStep) {
//   btn = document.querySelector(сlassSection).querySelectorAll("button");
//   list = document.querySelector(сlassSection).querySelectorAll("ul");
//   step=shift;
//   if (сlassSectionTrue!=сlassSection) {
//     сlassSectionTrue=сlassSection;
//     i=0;
//     $(list).css({
//       transform: "translateX(0)"
//     });
//   };

//   if (obj == btn[0]) {
//     i = i - 1;
//     moveleft();

//   } else {
//     i = i + 1;
//     moveright();

//   }
//   if ($(btn[0]).prop('disabled') && (i >= 1)) {
//     $(btn[0]).removeAttr('disabled')
//   };
//   if (i <= 0) {
//     $(btn[0]).attr('disabled', 'disabled');
//   };
//   if (i >= (sumStep - 1)) {
//     $(btn[1]).attr('disabled', 'disabled');
//   };

//   if ($(btn[1]).prop('disabled') && (i < (sumStep-1))) {
//     $(btn[1]).removeAttr('disabled')
//   };

// }

// function moveleft() {
//   shift = step * i;
//   $(list).css({
//     transform: "translateX(-" + shift + "px)",
//     transition: ".6s transform"
//   });
// }

// function moveright() {
//   shift = step * i;
//   $(list).css({
//     transform: "translateX(-" + shift + "px)",
//     transition: ".6s transform"
//   });
// }
