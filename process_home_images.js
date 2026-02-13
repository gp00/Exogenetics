const fs = require('fs');
const path = require('path');

const jsonPath = 'I_1.json';
const imagesDir = 'images';

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

const rawData = fs.readFileSync(jsonPath);
const data = JSON.parse(rawData);

data.forEach(item => {
    if (item.imageUrl && item.imageUrl.startsWith('data:image')) {
        const matches = item.imageUrl.match(/^data:image\/([a-zA-Z+]+);base64,(.+)$/);
        if (matches) {
            const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
            const base64Data = matches[2];
            const filename = `home_v1_${item.id}.${ext}`;
            const filepath = path.join(imagesDir, filename);

            fs.writeFileSync(filepath, base64Data, 'base64');
            console.log(`Saved ${filepath}`);

            // Update the JSON item
            item.imageUrl = `images/${filename}`;
        }
    }
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log('Updated I_1.json con las nuevas rutas de imágenes.');
