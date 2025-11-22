const meta = import.meta.glob('$lib/sectores/*.*', {eager:true})
const images = Object.keys(meta).map(m=> meta[m].default)

const sectors = [
  {title:'Comercial', icon: 'fa-solid fa-industry', alt:''},
  {title:'Hospital', icon: 'fa-solid fa-hospital', alt:''},
  {title:'Hotel', icon: 'fa-solid fa-cart-shopping', alt:''},
  {title:'Industrial', icon: 'fa-solid fa-utensils', alt:''},
  {title:'Restaurante', icon: 'fa-solid fa-suitcase', alt:''},
]

export default sectors.map((s, i) => ({...s, src: images[i]}))

