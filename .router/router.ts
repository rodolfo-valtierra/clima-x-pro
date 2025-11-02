import { createRouter } from 'sv-router';
import Index from '../src/routes/index.svelte';
import QuienesSomosIndex from '../src/routes/quienes-somos/index.svelte';
import QuienesSomosInformation from '../src/routes/quienes-somos/information.svelte';
import QuienesSomosMisionVision from '../src/routes/quienes-somos/mision-vision.svelte';
import ServicesId from '../src/routes/services/[id].svelte';

export const routes = {
  '/': Index,
  '/quienes-somos': {
    '/': QuienesSomosIndex,
    '/information': QuienesSomosInformation,
    '/mision-vision': QuienesSomosMisionVision
  },
  '/services': {
    '/:id': ServicesId
  }
};
export type Routes = typeof routes;
export const { p, navigate, isActive, preload, route } = createRouter(routes);
