import styles from "./app.module.css"
import {CapturePage} from "./sections/capture_page"
import {Catalog} from "./sections/catalog"
import {FreeCardForm} from "./sections/free_card_form"
import {Header} from "./sections/header"
import {Nav} from "./sections/nav"
import {PromoPage} from "./sections/promo_page"
import {WhyWe} from "./sections/why_we"
import {Portfolio} from "./sections/portfolio"
import {Price} from "./sections/price"
import {Reviews} from "./sections/reviews"
import {Faq} from "./sections/faq"
import {Manufacture} from "./sections/manufacture"
import {Order} from "./sections/order"
import {Footer} from "./sections/footer"
import {Contacts} from "./sections/contacts"

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <CapturePage />
        <Nav />
        <PromoPage />
        <WhyWe />
        <Catalog />
        <FreeCardForm />
        <Portfolio />
        <Price />
        <Reviews />
        <Faq />
        <Manufacture />
        <Order />
        <Contacts />
        <Footer />
      </main>
    </>
  )
}

export default App
