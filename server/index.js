const { Nuxt, Builder } = require('nuxt');
const express = require('express');
const config = require('../nuxt.config.js');

const app = express();
const port = process.env.PORT || 3000;

const nuxt = new Nuxt(config);

// start build process when in dev mode
if (process.env.NODE_ENV !== 'production') {
  const builder = new Builder(nuxt);
  builder.build();
}

// nuxt
app.use(nuxt.render);

// start up
const server = app.listen(port, '0.0.0.0', err => {
  if (err) {
    console.error(err); //eslint-disable-line no-console
  } else {
    console.info(`Listening on port ${server.address().port}...👌`); //eslint-disable-line no-console
  }
});
