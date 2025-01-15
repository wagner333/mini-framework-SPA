import { Router } from '../core/router.js';
import { AppModule } from './app.module.js';

document.addEventListener('DOMContentLoaded', () => {
  new Router(AppModule.routes);
});
