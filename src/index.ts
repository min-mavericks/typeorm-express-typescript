import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';

export const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
