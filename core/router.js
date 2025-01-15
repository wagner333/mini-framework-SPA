export class Router {
    constructor(routes) {
      this.routes = routes;
      window.addEventListener('hashchange', () => this.handleRoute());
      window.addEventListener('load', () => this.handleRoute());
    }
  
    handleRoute() {
      const path = location.hash.slice(1) || '/';
      const route = this.routes.find(r => r.path === path);
      if (route) {
        const component = new route.component();
        component.mount('#app');
      } else {
        document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
      }
    }
  }
  