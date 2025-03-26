'use strict'
const express = require('express');
const popstop = require('./src/sql/popstop');
const PORT = 3000;

const app = new express();

app.get('/', function (req, res) {
  res.send('Hello AWS')
});

app.get('/popstop', async function (req, res) {
  try {
    const data = await popstop.findOne({
      where: {
        id: 1
      }
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

