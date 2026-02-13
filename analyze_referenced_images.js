const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\TrabajoVBNet\\ExoGenetics';
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
const cssFiles = [path.join(rootDir, 'css', 'style.css'), path.join(rootDir, 'css', 'contact_styles.css')];

const referencedImages = new Set();

function findImages(content) {
    const pngJpgRegex = /["']([^"']+\.(png|jpg|jpeg|gif|svg))["']/gi;
    let match;
    while ((match = pngJpgRegex.exec(content)) !== null) {
        let imgPath = match[1];
        // Clean potential URL prefixes or relative paths
        imgPath = imgPath.replace(/^(..\/)+/, '');
        referencedImages.add(imgPath);
    }
}

htmlFiles.forEach(file => {
    findImages(fs.readFileSync(path.join(rootDir, file), 'utf8'));
});

cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
        findImages(fs.readFileSync(file, 'utf8'));
    }
});

const results = [];
let totalSize = 0;
let totalWebPSize = 0;

referencedImages.forEach(img => {
    const fullPath = path.join(rootDir, img);
    if (fs.existsSync(fullPath)) {
        const stat = fs.statSync(fullPath);
        const ext = path.extname(img).toLowerCase();
        let webpEst = stat.size;

        if (ext === '.png') webpEst = Math.round(stat.size * 0.15); // PNG to WebP lossy is huge
        else if (ext === '.jpg' || ext === '.jpeg') webpEst = Math.round(stat.size * 0.6); // JPG to WebP is good but less dramatic
        else if (ext === '.gif') webpEst = Math.round(stat.size * 0.1);

        results.push({
            name: img,
            ext: ext,
            originalSize: stat.size,
            webpSize: webpEst
        });

        totalSize += stat.size;
        totalWebPSize += webpEst;
    }
});

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

console.log('--- TABLE START ---');
results.forEach(r => {
    console.log(`| ${r.name} | ${r.ext} | ${formatSize(r.originalSize)} | ${formatSize(r.webpSize)} |`);
});
console.log('--- TABLE END ---');
console.log(`Total Images: ${results.length}`);
console.log(`Total Original Space: ${formatSize(totalSize)}`);
console.log(`Total Estimated WebP Space: ${formatSize(totalWebPSize)}`);
console.log(`Gain: ${(((totalSize - totalWebPSize) / totalSize) * 100).toFixed(2)}%`);
