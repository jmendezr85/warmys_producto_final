const {venta_model} = require('../models');

getAllVenta = (req, res) => {
    venta_model.find().exec((error, venta) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({venta});
    })
}

addVenta = (req, res) => {
    const venta_new = new venta_model(req.body);
    venta_new.save((error, venta) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.json({mensaje: req.body.description + " agregado satisfactoriamente"})
    })
}

deleteVenta = async (req, res) => {
    const venta_delete = await venta_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(venta_delete) return res.json({mensaje: venta_delete.description + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
}

updateVenta = async (req, res) => {
    try{
        const venta_update = await venta_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(venta_update) return res.json({mensaje: "ventao actualizado correctamente"});
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
    getAllVenta,
    addVenta,
    deleteVenta,
    updateVenta
})