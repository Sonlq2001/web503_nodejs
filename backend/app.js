import express from  'express';
import morgan from  'morgan';
import dotenv from  'dotenv';
import productRouter from './routes/product';
import categoryRouter from './routes/category';


const app = express();
dotenv.config();


app.use(morgan('dev'));
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