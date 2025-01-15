const browserSync = require('browser-sync').create();
const path = require('path');
const baseDir = path.join(__dirname, '../');
browserSync.init({
  server: {
    baseDir: baseDir
  },
  files: [`${baseDir}/**/*`], 
  open: true, 
  port: 8080 
});

console.log('Servidor iniciado. Alterações nos arquivos vão atualizar a página.');
