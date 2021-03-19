import express from  'express';
import morgan from  'morgan';
import dotenv from  'dotenv';
import productRouter from './routes/product';
import categoryRouter from './routes/category';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
// middle
app.use(morgan('dev'));
app.use(bodyParser.json());
dotenv.config();

// connect db 
mongoose.connect(process.env.MONGODB_URI, {
    userNewUrlParser: true,
    createIndex: true
}).then(() => {
    console.log('db connect');
})

mongoose.connection.on('error', (err) => {
    console.log(`db connection error: ${err.message}`);
})

const port = process.env.PORT || 8000;

// routes
app.use('/api', productRouter);
app.use('/api', categoryRouter);


app.get('/', (req, res) => {
    res.send('Hello World! 123')
})

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
});