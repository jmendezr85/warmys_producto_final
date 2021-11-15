const {registro_model} = require('../models');

getAllRegistro = (req, res) => {
    registro_model.find().exec((error, registro) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({registro});
    })
}

addRegistro = (req, res) => {
    const registro_new = new registro_model(req.body);
    registro_new.save((error, registro) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.json({mensaje: req.body.description + " agregado satisfactoriamente"})
    })
}

deleteRegistro = async (req, res) => {
    const registro_delete = await registro_model.findByIdAndDelete({name: req.params.name})

    try{
        if(registro_delete) return res.json({mensaje: registro_delete.description + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
}

updateRegistro = async (req, res) => {
    try{
        const registro_update = await registro_model.findByIdAndUpdate({name: req.body.name}, req.body, {useFindAndModify: false});
        if(registro_update) return res.json({mensaje: "usuario actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
}

handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

module.exports = Object.freeze({
    getAllRegistro,
    addRegistro,
    deleteRegistro,
    updateRegistro
})