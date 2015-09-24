require('babel/register')({
    ignore: /node_modules/,
    only: /src/,
});
require('./server.js');