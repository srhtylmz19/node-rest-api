const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

// LOG MIDDLEWARES FOR REQUESTS
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// HANDLE CORS !
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept , Authorization')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,  POST, PUT , PATCH, DELETE')
        return res.status(200).json({})
    }

    next();
})


// API ROUTES to HANDLE REQUESTS !
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)


app.use((req, res, next) => {
    const error = new Error('Not Found !');
    error.status = 404;
    next(error);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    })
})


module.exports = app;