import experss from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js'

const app = experss();

app.use(cors());

app.use(experss.json({extended: true}));
app.use(experss.urlencoded({extended:true}));

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`your server is runing  successfully on PORT ${PORT}`));