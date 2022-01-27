const express = require('express');
const app = express();

//const path = require('path');
//const tasks = require('./routes/tasks');
// Hier wird für datenbankverbindung gebraucht
const mongoose = require('mongoose')
require('dotenv/config');

//app.get('/hello', (req, res) => {
//  res.send('Task Manager')
//})
const port = 5000;

// app.use('/api/v1/tasks', tasks);

// Middleware: Hier wird die Webside (indexdatei) im ordner public ausgegeben
app.use(express.static('./public'));

// server wird auf port 5000 gehostet
app.listen(port, () => {
  console.log('server is listening on port ${port} ....')
});

// für alle nicht definierten routen wird fehler ausgegeben
//app.all('*', (req, res) => {
// res.status(404).send('resource not found')
//});



//Hier wird mit der db connectet
try {
mongoose.connect(process.env.MONGO_URI, () =>
  console.log('Connected to DB')
);
} catch (error) {
  console.log(error);
};

/**
  const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Connected to DB`)
    );
  } catch (error) {
    console.log(error);
  }
};
*/