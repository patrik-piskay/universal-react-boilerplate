import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ChatApp from '../common/containers/app';

const app = express();
const port = 3000;

function renderHtml(content) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>React App</title>
        </head>
        <body>
            <div id="app">${content}</div>

            <script type="text/javascript" src="build/bundle.js"></script>
        </body>
        </html>
    `;
}

app.get('/', function(req, res) {
    const content = ReactDOMServer.renderToString(<App />);
    res.send(renderHtml(content));
});

app.listen(port, function() {
    console.log('Server listening on port %s', port);
});