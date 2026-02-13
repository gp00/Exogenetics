const fs = require('fs');
const path = require('path');

function getImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== '.git' && file !== 'node_modules' && file !== 'borrame') {
                getImages(filePath, fileList);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(ext)) {
                fileList.push({
                    name: file,
                    path: filePath,
                    size: stat.size,
                    ext: ext
                });
            }
        }
    });
    return fileList;
}

const images = getImages('c:\\TrabajoVBNet\\ExoGenetics');
console.log(JSON.stringify(images, null, 2));
