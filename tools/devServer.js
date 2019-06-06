import '@babel/polyfill';
import '@babel/register';
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import morgan from 'morgan';
import webpackConfig from '../webpack.config.dev';

const compiler = webpack(webpackConfig);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: false,
        publicPath: webpackConfig.output.publicPath
    })
);
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('.tmp'));
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../.tmp/index.html'));
})

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`App is running on port http://localhost:${PORT}`);
    }
})