
import { Component } from '../../../core/component.js';

class homeComponent extends Component {
  constructor(props = {}) {
    super(props);
    this.isLoading = false;
  }

  showLoading() {
    if (this.element) {
      this.element.innerHTML = '<div class="loading">Loading...</div>';
    }
  }

  hideLoading() {
    if (this.element) {
      this.element.innerHTML = this.render();
    }
  }

  getStyles() {
    return `
      body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
      .loading { font-size: 2rem; color: #000; text-align: center; }
    `;
  }

  getScripts() {
    return `function helloWorld(){
    console.log("hello world");  }  helloWorld()`;
  }

  render() {
    return `
      <div class="home-header">
        <h1>Welcome to home</h1>
      </div>
    `;
  }

  async mount(selector) {
    this.element = document.querySelector(selector);
    if (this.element) {
      this.showLoading();
      
      const styleElement = document.createElement('style');
      styleElement.innerHTML = this.getStyles();
      document.head.appendChild(styleElement);

      this.element.innerHTML = this.render();

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = this.getScripts();
      document.body.appendChild(scriptElement);

      this.hideLoading();
    }
  }
}

export default homeComponent;
  