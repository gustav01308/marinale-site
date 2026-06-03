/**
 * renameFiles.js — Renomeia arquivos com espaços/caracteres especiais em public/imagens/
 * Uso: node renameFiles.js
 */
const fs   = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'imagens');

const renomear = [
  { de: 'imagem mecanico.jpg',  para: 'imagem-mecanico.jpg'  },
  { de: 'Marinale logo.png',    para: 'Marinale-logo.png'    },
];

if (!fs.existsSync(dir)) {
  console.error('❌ Pasta não encontrada:', dir);
  process.exit(1);
}

renomear.forEach(({ de, para }) => {
  const src  = path.join(dir, de);
  const dest = path.join(dir, para);

  if (fs.existsSync(dest)) {
    console.log(`ℹ️  Já existe: "${para}" — nenhuma ação necessária.`);
  } else if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`✅ Renomeado: "${de}"  →  "${para}"`);
  } else {
    console.log(`⚠️  Arquivo não encontrado: "${de}" (verifique em ${dir})`);
  }
});

console.log('\n✔ Concluído. Imagens verificadas em public/imagens/');
