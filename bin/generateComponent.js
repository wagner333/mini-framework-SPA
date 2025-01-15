#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

// Diretório onde os componentes serão criados
const COMPONENTS_DIR = path.join(__dirname, '../app/pages');

// Template para o componente
const TEMPLATE = {
  js: (componentName) => `
import { Component } from '../../../core/component.js';

class ${componentName}Component extends Component {
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
    return \`
      body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
      .loading { font-size: 2rem; color: #000; text-align: center; }
    \`;
  }

  getScripts() {
    return \`console.log('${componentName}Component script loaded!');\`;
  }

  render() {
    return \`
      <div class="${componentName.toLowerCase()}-header">
        <h1>Welcome to ${componentName}</h1>
      </div>
    \`;
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

export default ${componentName}Component;
  `,
};

// Função para gerar o componente
const generateComponent = (componentName) => {
  // Verifica se o nome do componente foi fornecido
  if (!componentName) {
    console.error('Erro: Nome do componente não fornecido.');
    process.exit(1);
  }

  // Cria o diretório do componente
  const componentDir = path.join(COMPONENTS_DIR, componentName);
  if (fs.existsSync(componentDir)) {
    console.error(`Erro: O componente "${componentName}" já existe.`);
    process.exit(1);
  }

  fs.ensureDirSync(componentDir);

  // Cria os arquivos do componente
  fs.writeFileSync(path.join(componentDir, `${componentName}.component.js`), TEMPLATE.js(componentName));

  console.log(`Componente "${componentName}" gerado com sucesso!`);
};

const args = process.argv.slice(2);
const componentName = args[0];
generateComponent(componentName);
