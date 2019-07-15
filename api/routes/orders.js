var express = require ('express');
var router = express.Router();

router.get('/', (req, res, next ) => {
    res.status(200).json({
        message : 'Get All Order'
    })
});

router.post ('/',(req, res, next ) => {
    res.status(200).json({
        message : 'Add Order'
    })
});

router.get('/:orderId',(req, res, next )=>{

    res.status(200).json({
        message : 'Get Order by Id',
        id: req.params.orderId
    })

});

router.patch('/:orderId', (req, res, next)  =>{
        res.status(200).json({
            message : 'Updated Order'
        })
});

router.delete('/:orderId', (req, res, next)  =>{
    res.status(200).json({
        message : 'delete Order'
    })
});

module.exports = router;
