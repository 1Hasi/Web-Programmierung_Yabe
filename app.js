const express = require('express');
const app = express();
const mongoose = require ('mongoose');

//const path = require('path');
//const tasks = require('./routes/tasks');
// Hier wird für datenbankverbindung gebraucht
const connectDB = require('./db/connect')
require('dotenv').config();

//app.get('/hello', (req, res) => {
//  res.send('Task Manager')
//})

app.use('/api/v1/tasks', tasks);

// Middleware: Hier wird die Webside (indexdatei) im ordner public ausgegeben
// app.use(express.static('./public'));

// server wird auf port 5000 gehostet
app.listen(5000, () => {
  console.log('server is listening on port 5000....')
});

// für alle nicht definierten routen wird fehler ausgegeben
//app.all('*', (req, res) => {
// res.status(404).send('resource not found')
//});

//const port = 5000;

//Hier wird mit der db connectet


/**
  const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
**/