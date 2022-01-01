import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.status(200).send('Duel Links Collection');
});

export default app;
