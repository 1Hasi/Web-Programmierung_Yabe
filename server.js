<<<<<<< Updated upstream:server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// Hier wird für datenbankverbindung gebraucht
import mongoose from 'mongoose';
import dotenv from 'dotenv';
=======
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
>>>>>>> Stashed changes:app.js

//Import Routes
import tasksRoute from './routes/tasks.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

dotenv.config();

const app = express();
const port = 5000;

// Middleware: 
app.use(cors());
<<<<<<< Updated upstream:server.js
app.use(bodyParser.json());
=======
>>>>>>> Stashed changes:app.js
//Hier wird die Webside (indexdatei) im ordner public ausgegeben
app.use(express.static('./public'));

// server wird auf port 5000 gehostet
app.listen(port, () => {
  console.log(`server is running on ${port}`)
}); 

app.use('/', tasksRoute);
app.use('/api/users', userRouter);
app.use ('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

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