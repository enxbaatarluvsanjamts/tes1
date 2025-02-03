const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // HTML, JS файлууд байрлах хавтас

app.post('/save', (req, res) => {
    const { username, password } = req.body;
    const data = `Нэвтрэх нэр: ${username}\nНууц үг: ${password}\n`;

    fs.appendFile(path.join(__dirname, 'text.txt'), data, (err) => {
        if (err) {
            console.error('Файлд бичих алдаа:', err);
            return res.status(500).json({ message: 'Файлд бичих алдаа' });
        }
        res.json({ message: 'Мэдээлэл амжилттай хадгалагдлаа.' });
    });
});

app.listen(PORT, () => {
    console.log(`Сервер http://localhost:${PORT} дээр ажиллаж байна`);
});
