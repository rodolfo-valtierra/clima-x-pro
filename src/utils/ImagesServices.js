const meta = import.meta.glob('$lib/sectores/*.*', {eager:true})
const images = Object.keys(meta).map(m=> meta[m].default)

const sectors = [
  {title:'Comercial', icon: 'fa-solid fa-industry'},
  {title:'Hospital', icon: 'fa-solid fa-hospital'},
  {title:'Hotel', icon: 'fa-solid fa-cart-shopping'},
  {title:'Industrial', icon: 'fa-solid fa-utensils'},
  {title:'Restaurante', icon: 'fa-solid fa-suitcase'},
]

export default sectors.map((s, i) => ({...s, src: images[i]}))

