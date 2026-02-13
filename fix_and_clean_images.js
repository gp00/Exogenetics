const fs = require('fs');
const path = require('path');

const imagesDir = 'images';
const borrameDir = path.join(imagesDir, 'borrame');

if (!fs.existsSync(borrameDir)) {
    fs.mkdirSync(borrameDir);
}

function getFiles(dir, allFiles) {
    const files = fs.readdirSync(dir);
    allFiles = allFiles || [];
    files.forEach(function(file) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            if (file !== 'borrame' && file !== 'node_modules' && file !== '.git') {
                getFiles(name, allFiles);
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.json')) {
                allFiles.push(name);
            }
        }
    });
    return allFiles;
}

const projectFiles = getFiles('.');
console.log(`Buscando referencias en ${projectFiles.length} archivos...`);

let combinedContent = '';
projectFiles.forEach(file => {
    try {
        combinedContent += fs.readFileSync(file, 'utf8') + '\n';
    } catch (e) {}
});

const imagesInRoot = fs.readdirSync(imagesDir).filter(f => fs.statSync(path.join(imagesDir, f)).isFile());
const imagesInBorrame = fs.readdirSync(borrameDir).filter(f => fs.statSync(path.join(borrameDir, f)).isFile());

console.log(`Imágenes en root: ${imagesInRoot.length}, en borrame: ${imagesInBorrame.length}`);

imagesInRoot.forEach(img => {
    if (!combinedContent.includes(img)) {
        fs.renameSync(path.join(imagesDir, img), path.join(borrameDir, img));
        console.log(`[LIMPIEZA] Moviendo a borrame (no usada): ${img}`);
    }
});

imagesInBorrame.forEach(img => {
    if (combinedContent.includes(img)) {
        fs.renameSync(path.join(borrameDir, img), path.join(imagesDir, img));
        console.log(`[RESTAURACIÓN] Recuperando de borrame (está en uso): ${img}`);
    }
});

console.log('Auditoría y limpieza de imágenes finalizada.');