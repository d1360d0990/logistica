const mongoose = require("mongoose");

const logisticSchema = new mongoose.Schema(
  {
    senderName: {
      type: String,
      required: true,
    },
    senderPhone: {
      type: String,
      required: true,
    },
    recipientName: {
      type: String,
      required: true,
    },
    recipientPhone: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true
    },
    packageDescription: {
      type: String,
      required: true,
    },

    packageWeight: {
      type: Number,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    originProvince: {
      type: String,
      required: true,
    },
    originDepartment: {
      type: String,
      required: true,
    },
    destinationProvince:{
      type: String,
      required: true,
    },
    destinationDepartment: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pendiente", "En tránsito", "Entregado"],
      default: "Pendiente",
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const modelLogistic = mongoose.model("Logistica", logisticSchema);
module.exports = modelLogistic;
