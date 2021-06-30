import {Component} from "react"
import styles from "./portfolio.module.css"

interface Props {}
export class Portfolio extends Component<Props, {}> {
  render() {
    return (
      <section id="portfolio" className="main-portfolio">
        <h2 className="main-portfolio__title">Портфолио</h2>
        <div className="main-portfolio__inner">
          <button className="btn-portfolo btn-portfolo--left" type="button" disabled={true} />
          <div className="main-portfolio__wrapper">
            <ul className="main-portfolio__list">
              <li className="main-portfolio__item ">
                <img src="img/m2.jpg" alt="Карта профессионала гипермаркета «М2»" width="404" height="302" />
              </li>
              {/* <li className="main-portfolio__item"> <img src="img/burton.jpg" alt="Карта магазина «Burton»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/chapie.jpg" alt="Карта магазина «Шапье»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/siluet.jpg" alt="Карта магазина «Силуэт»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/avalman.jpg" alt="Карта горнолыжного комплекса «Авальман»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/francescodonni.jpg" alt="Карта магазина обуви «Francesco Donni»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/handmad.jpg" alt="Карта магазина рукоделия «Hand mad»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/sunlight.jpg" alt="Карта магазина ювелирных украшений «Sunlight»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/5element.jpg" alt="Карта магазина «5 Элемент»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/planetjens.jpg" alt="Карта магазина «Planet Jens»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/moscjewfact.jpg" alt="Карта магазина «Московский ювелирный звод»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/adriatika.jpg" alt="Карта басейна №3 «Адриатика»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/therapy.jpg" alt="Карта магазина стильной медицинской одежды «Therapy»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/ecco.jpg" alt="Карта магазина «Ecco»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/formulam2.jpg" alt="Карта гипермаркета стрительных материалов  «Формула М2»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/soliver.jpg" alt="Карта магазина «S`Oliver»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/lana.jpg" alt="Карта магазина женской одежды «Лана»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/p1200518.jpg" alt="Подставка на стол с именем «Мир тюнига»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/p1200519.jpg" alt="Подставка на стол со скидкой «ЭПЛ»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/aksioma.jpg" alt="Карта магазина «Аксиома»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/sublimation.jpg" alt="Карты с сублимационной печатью" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/hotelsibir.jpg" alt="Карта гостинцы «Сибирь»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/pogramulke.jpg" alt="Карта магазина  «По гаммульке»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/legend.jpg" alt="Карта магазина «Legend»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/shoesmarket.jpg" alt="Карта магазина «Shoes Market»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/bonuscard.jpg" alt="Бонусная карта федеральной сети «Гостинец»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/fitauto.jpg" alt="Карта магазина «Fit auto»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/millefamille.jpg" alt="Карта магазина «Mille fa mille»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/zoomarket.jpg" alt="Карта магазина «zoo маркет»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/clubcards.jpg" alt="Карта магазина «Lisete»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/makk.jpg" alt="Карта автомагазинов и сервиса «Makk мир аккумуляторов»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/greengarden.jpg" alt="Карта магазина садовода «Зеленый дворик»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/certificate.jpg" alt="Подарочный сертификат на установку окон «Fogel»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/goergo.jpg" alt="Карта магазина европейкой обуви «Goergo»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/gooddoctor.jpg" alt="Карта диагностического центра «Добрый доктор»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/metr.jpg" alt="Карта строительного магазина «Метр»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/discount.jpg" alt="Карта магазина «Садовод Любитель»" width="404" height="302"></li>
            <li className="main-portfolio__item"> <img src="img/eckor.jpg" alt="Карта хайтек магазина «Эскор»" width="404" height="302"></li> */}
            </ul>
          </div>
          <button className="btn-portfolo btn-portfolo--right" type="button" />
        </div>
      </section>
    )
  }
}
