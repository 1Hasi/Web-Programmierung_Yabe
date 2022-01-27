const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const cors = require('cors');

//const path = require('path');
//const tasks = require('./routes/tasks');

// Hier wird für datenbankverbindung gebraucht
const mongoose = require('mongoose')
require('dotenv/config');

const port = 5000;

// Middleware: 
app.use(cors());
app.use(bodyParser.json());
//Hier wird die Webside (indexdatei) im ordner public ausgegeben
app.use(express.static('./public'));

// server wird auf port 5000 gehostet
app.listen(port, () => {
  console.log('server is listening on port ${port} ....')
}); 


//Import Routes
const tasksRoute = require('./routes/tasks');

app.use('/tasks', tasksRoute)

// für alle nicht definierten routen wird fehler ausgegeben
 app.all('*', (req, res) => {
res.status(404).send('resource not found')
}); 

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