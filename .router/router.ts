import { createRouter } from 'sv-router';
import Index from '../src/routes/index.svelte';
import ProductosId from '../src/routes/productos/[id].svelte';
import QuienesSomosIconText from '../src/routes/quienes-somos/IconText.svelte';
import QuienesSomosIndex from '../src/routes/quienes-somos/index.svelte';
import QuienesSomosInformation from '../src/routes/quienes-somos/information.svelte';
import QuienesSomosMisionVision from '../src/routes/quienes-somos/mision-vision.svelte';
import QuienesSomosTeamFooter from '../src/routes/quienes-somos/TeamFooter.svelte';
import ServicesId from '../src/routes/services/[id].svelte';

export const routes = {
  '/': Index,
  '/productos': {
    '/:id': ProductosId
  },
  '/quienes-somos': {
    '/IconText': QuienesSomosIconText,
    '/': QuienesSomosIndex,
    '/information': QuienesSomosInformation,
    '/mision-vision': QuienesSomosMisionVision,
    '/TeamFooter': QuienesSomosTeamFooter
  },
  '/services': {
    '/:id': ServicesId
  }
};
export type Routes = typeof routes;
export const { p, navigate, isActive, preload, route } = createRouter(routes);
