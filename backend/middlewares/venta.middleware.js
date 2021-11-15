const {venta_model} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const venta_joi = joi.object({
        _id: joi.optional(),
        cantidad: joi.number().required(),
        description: joi.string().required(),
        unit_cost: joi.number().required(),
        state: joi.boolean().optional()
    });

    const {error} = venta_joi.validate(req.body);
    if(error) return res.status(400).json({error:true, mensaje: error.details[0].message});
    next()
}

verifycantidad = (req, res, next) => {
    venta_model.findOne({cantidad: req.body.cantidad}).exec((error, venta) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        if(venta) return res.status(400).json({error:true, mensaje: venta.description + " está registrado con el código de barras " + venta.cantidad});
        next();
    });
}

module.exports = Object.freeze({
    verifyTypes,
    verifycantidad
});