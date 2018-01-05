import express from 'express';
import bodyparser from 'body-parser';
import config from './Config/config';
import datasource from './Config/datasource';
import booksRouter from './Routes/Books';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyparser.json());

const Books = app.datasource.models.Books;
booksRouter(app, Books);

export default app;
