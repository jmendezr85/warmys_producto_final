const router = require('express').Router();
const {venta_controller} = require('../controllers');
const {venta_middleware} = require('../middlewares');

router.post('/add', venta_middleware.verifyTypes, venta_middleware.verifycantidad,venta_controller.addVenta);
router.get('/list', venta_controller.getAllVenta);
router.put('/update', venta_middleware.verifyTypes, venta_controller.updateVenta)
router.delete('/delete/:id', venta_controller.deleteVenta);

module.exports = router;



