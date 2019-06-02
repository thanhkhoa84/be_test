const webpack = require('webpack');
const config = require('../webpack.config.prod');

process.env.NODE_ENV = 'production';

webpack(config).run((error, stats) => {
    if (error) { // so a fatal error occurred. Stop here.
        console.log(error);
        return 1;
    }
    console.log(`Webpack stats: ${stats}`);
    return 0;
});