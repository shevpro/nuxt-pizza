export default defineEventHandler(async (event) => {
  return [
    {
      id: 1,
      title: 'Чилл Грилл',
      caption: 'Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо',
      currentPrice: 519,
      imgUrl: '../images/pizza.avif',
    },
    {
      id: 2,
      title: 'Баварская',
      caption: 'Баварские колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, фирменный томатный соус',
      currentPrice: 579,
      imgUrl: '../images/pizza.avif',
    }
  ]
});