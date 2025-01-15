export class Component {
  constructor(props = {}) {
    this.props = props;
    this.element = null;
  }

  render() {
    return '';
  }

  getStyles() {
    return '';
  }

  getScripts() {
    return '';
  }

  mount(selector) {
    this.element = document.querySelector(selector);
    if (this.element) {
      this.element.innerHTML = this.render();

      // Inserir estilos
      const styles = this.getStyles();
      if (styles) {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);
      }

      // Inserir scripts
      const scripts = this.getScripts();
      if (scripts) {
        const scriptElement = document.createElement('script');
        scriptElement.innerHTML = scripts;
        document.body.appendChild(scriptElement);
      }
    }
  }
}
