const mongoose = require('mongoose');

const logisticSchema = new mongoose.Schema({

      destino: {
        type: String,
        required: true,
      },
      fechaCreacion: {
        type: Date,
        default: Date.now
      },
      fechaEntrega: {
        type: Date,
      },
      estado: {
        type: String,
        enum: ['Pendiente', 'En tránsito', 'Entregado'],
        default: 'Pendiente', // Estado inicial
        required: true
      },
      detalles: {
        type: String,
        required: true,
      }
},
    {
        timestamps: true,
    }
);

const modelLogistic = mongoose.model("Logistica", logisticSchema);
module.exports = modelLogistic;