const express = require('express');
const app = express();
const morgan = require('morgan');


const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

// LOG MIDDLEWARES FOR REQUESTS
app.use(morgan('dev'))


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