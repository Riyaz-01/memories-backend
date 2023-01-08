import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postRouter from './routes/posts.js';

const app = express();
dotenv.config();

//middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

//routes middleware
app.use('/posts', postRouter);

app.get('/', (req, res) => {
	res.send('This is memories API server');
});

//connecting database
const port = 4000;
const connection_string = `mongodb+srv://testUser:testUser@cluster0.3bxlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
	.connect(connection_string)
	.then(() =>
		app.listen(port, () => console.log(`Server is running on port ${port}`))
	)
	.catch((err) => console.log(err.message));
