import express from 'express';
import bodyparser from 'body-parser';
import config from './Config/config';
import datasource from './Config/datasource';
import booksRouter from './Routes/Books';
import usersRouter from './Routes/Users';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyparser.json());

booksRouter(app);
usersRouter(app);

export default app;
