const router = require('express').Router();
const {registro_controller} = require('../controllers');
const {registro_middleware} = require('../middlewares');

 router.post('/add', registro_middleware.verifyTypes, registro_middleware.verifyname,registro_controller.addRegistro);
// router.get('/list', registro_controller.getAllregistro);
// router.put('/update', registro_middleware.verifyTypes, registro_controller.updateregistro)
// router.delete('/delete/:id', registro_controller.deleteregistro);

module.exports = router;




