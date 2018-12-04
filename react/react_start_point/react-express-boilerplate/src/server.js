import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './client/components/App';
import Html from './client/components/Html';
import {ServerStyleSheet} from 'styled-components';

const port = 3000;
const server = express();

server.get('/', (req, res) => {

   const sheet = new ServerStyleSheet();

   const body = ReactDOM.renderToString(sheet.collectStyles(<App/>));
   console.log("body", body);
   const styles = sheet.getStyleTags();
   const title = "hello react server rendering";

   res.send(Html({body, styles, title}));
});

server.listen(port);
console.log(`Server running on port ${port}`);
