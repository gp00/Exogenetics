const fs = require('fs');
const path = require('path');

const filesToProcess = [
    { path: 'I_2.json', prefix: 'home_v2' },
    { path: 'I_3.json', prefix: 'home_v3' }
];

const imagesDir = 'images';

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

filesToProcess.forEach(fileInfo => {
    if (!fs.existsSync(fileInfo.path)) {
        console.log(`Archivo no encontrado: ${fileInfo.path}`);
        return;
    }

    console.log(`Procesando ${fileInfo.path}...`);
    const rawData = fs.readFileSync(fileInfo.path);
    const data = JSON.parse(rawData);

    data.forEach(item => {
        if (item.imageUrl && item.imageUrl.startsWith('data:image')) {
            const matches = item.imageUrl.match(/^data:image\/([a-zA-Z+]+);base64,(.+)$/);
            if (matches) {
                const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
                const base64Data = matches[2];
                const filename = `${fileInfo.prefix}_${item.id}.${ext}`;
                const filepath = path.join(imagesDir, filename);

                // No sobreescribir si ya existe (aunque con el prefijo v2/v3 no debería pasar)
                if (!fs.existsSync(filepath)) {
                    fs.writeFileSync(filepath, base64Data, 'base64');
                    console.log(`Guardada: ${filepath}`);
                } else {
                    console.log(`Omitida (ya existe): ${filepath}`);
                }

                // Actualizar el JSON para que apunte a la ruta física (opcional pero recomendado por el protocolo)
                item.imageUrl = `images/${filename}`;
            }
        }
    });

    fs.writeFileSync(fileInfo.path, JSON.stringify(data, null, 2));
    console.log(`Finalizado ${fileInfo.path}.
`);
});
