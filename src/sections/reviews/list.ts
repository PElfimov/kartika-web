interface Item {
  author: string
  review: string
  date: string // `04.06.2015`,
  fileLogo: string
}

export const list: Item[] = [
  {
    author: `Дарья, «Формула М2»`,
    review: `Каким бы ни был тираж - одна карта или тысячи, компания всегда работает профессионально - все качественно и в срок. Надеемся на долгосрочное и эффективное сотрудничество.`,
    date: `04.06.2015`,
    fileLogo: `m2`
  },
  {
    author: `Андрей, сеть магазинов «АВТОМАГ»`,
    review: `Хорошая типография, заказывал листовки и скидочные карты, всё сделали быстро и качественно. Пожалел, что визитки заказывал не здесь. Приятное и вежливое общение с персоналом, ребята профессионалы. Рекомендую!`,
    date: `25.08.2015`,
    fileLogo: `automag`
  },
  {
    author: `Алла, КДЦ «Добрый доктор»`,
    review: `Выражаем благодарность всему коллективу типографии, и в частности Павлу Елфимову за отличную работу, профессионализм и высокое качество продукции. Успехов и процветания!`,
    date: `01.10.2014`,
    fileLogo: `gooddoctor`
  },
  {
    author: `Наталья, компания ООО «Арабика»`,
    review: `Заказывали карты для персонала, после года использования ни одна буква на карте не пострадала! Даже на ленте ни одной царапины!!! Спасибо за качество!!!`,
    date: `10.09.2015`,
    fileLogo: `arabika`
  },
  {
    author: `Наталья, «Mille fa Mille»`,
    review: `Карты понравились! Заказ был выполнен быстро. Цены тоже порадовали!`,
    date: `29.06.2015`,
    fileLogo: `mille`
  },
  {
    author: `Ирина Васильевна, Гостиница «Сибирь»`,
    review: `Огромная благодарность «Картике» за качество, сроки изготовления и отзывчивость на любую просьбу клиента!`,
    date: `06.10.2014`,
    fileLogo: `sibir`
  }
]
