import { mount } from 'svelte'
import App from './App.svelte'
import 'sv-router/generated'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
	fas
)

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
