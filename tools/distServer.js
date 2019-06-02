import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
})

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`App is running on port http://localhost:${PORT}`);
    }
})