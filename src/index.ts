import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import { setupDataSource } from 'orm/dataSource';

export const app = express();

const port = process.env.PORT || 4000;
(async () => {
  await setupDataSource();
})();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
