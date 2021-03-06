const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders index'
    })
})

router.post('/', (req, res, next) => {

    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity,
    }

    res.status(200).json({
        message: 'orders created',
        order
    })
})

router.get('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId
    res.status(200).json({
        message: 'order detail',
        id: orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId
    res.status(200).json({
        message: 'order delete',
        id: orderId
    })
})


module.exports = router