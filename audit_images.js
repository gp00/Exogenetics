const fs = require('fs');
const path = require('path');

const imagesDir = 'images';
const borrameDir = path.join(imagesDir, 'borrame');

if (!fs.existsSync(borrameDir)) {
    fs.mkdirSync(borrameDir);
}

// 1. Obtener todos los archivos HTML y CSS del proyecto
function getFiles(dir, allFiles) {
    const files = fs.readdirSync(dir);
    allFiles = allFiles || [];
    files.forEach(function(file) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            if (file !== 'borrame' && file !== 'node_modules' && file !== '.git' && file !== 'borrame') {
                getFiles(name, allFiles);
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
                allFiles.push(name);
            }
        }
    });
    return allFiles;
}

const projectFiles = getFiles('.');
console.log(`Buscando en ${projectFiles.length} archivos...`);

// 2. Leer el contenido de todos los archivos una sola vez
let combinedContent = '';
projectFiles.forEach(file => {
    try {
        combinedContent += fs.readFileSync(file, 'utf8') + '\n';
    } catch (e) {
        console.log(`Error leyendo ${file}: ${e.message}`);
    }
});

// 3. Auditar imágenes
const allImages = fs.readdirSync(imagesDir).filter(file => {
    return fs.statSync(path.join(imagesDir, file)).isFile();
});

console.log(`Auditando ${allImages.length} imágenes...`);

let unusedCount = 0;
allImages.forEach(img => {
    if (!combinedContent.includes(img)) {
        const oldPath = path.join(imagesDir, img);
        const newPath = path.join(borrameDir, img);
        
        fs.renameSync(oldPath, newPath);
        console.log(`Movida a borrame: ${img}`);
        unusedCount++;
    }
});

console.log(`Proceso finalizado. Imágenes no utilizadas movidas: ${unusedCount}`);