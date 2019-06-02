require('dotenv').config();

import express from 'express';
import middlewaresConfig from './config/middlewaresConfig';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json('works!');
})

// MIDDLEWARES
middlewaresConfig(app);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`App is running on port ${PORT}`);
    }
});