const {registro_model} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const registro_joi = joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.number().required(),
        rol: joi.boolean().optional()
    });

    const {error} = registro_joi.validate(req.body);
    if(error) return res.status(400).json({error:true, mensaje: error.details[0].message});
    next()
}

verifyname = (req, res, next) => {
    registro_model.findOne({name: req.body.name}).exec((error, registro) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        if(registro) return res.status(400).json({error:true, mensaje: registro.name + " está registrado con el correo " + registro.email});
        next();
    });
}

module.exports = Object.freeze({
    verifyTypes,verifyname
  
});