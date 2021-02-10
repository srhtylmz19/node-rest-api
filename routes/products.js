const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'products index'
    })
})

router.post('/', (req, res, next) => {

    const product = {
        name: req.body.name,
        price: req.body.price,
    }

    res.status(200).json({
        message: 'product created',
        product
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId

    res.status(200).json({
        id,
        message: 'show product !'
    })
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        id,
        message: 'update product !'
    })
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId

    res.status(200).json({
        id,
        message: 'delete product !'
    })
})


module.exports = router