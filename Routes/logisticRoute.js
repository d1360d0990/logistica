const express = require('express');
const router = express.Router();
const modelLogistic = require('../Models/logisticModel'); // Importar el modelo de orden de logística


// Obtener todas las Ordenes de Logística (GET)
router.get('/', async (req, res) => {
    try {
        const orders = await modelLogistic.find().limit(100); // Obtener todas las ordenes de logística
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las ordenes', error });
    }
});

// Obtener una Orden de Logística por ID (GET)
router.get('/orders/:id', async (req, res) => {
    try {
        const orders = await modelLogistic.findById(req.params.id); // Buscar orden por ID
        if (!orders) {
            return res.status(404).json({ mensaje: 'orden de logística no encontrada' });
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la orden de logística', error });
    }
});

// Crear una nueva orden (POST)
router.post('/addOrder', async (req, res) => {
    const body = req.body;
    console.log('req.body:', body);
    try {
        const nuevaOrden = await modelLogistic.create(body); // Insertar en la base de datos
        res.status(201).json(nuevaOrden); // 201 indica que se ha creado un recurso
    } catch (error) {
        console.log('error:', error);
        res.status(400).json(error); // Manejar errores
    }
});

// Actualizar una orden por ID (PUT)
router.put('/orders/:id', async (req, res) => {
    try {
        const ordenActualizada = await modelLogistic.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!ordenActualizada) {
            return res.status(404).json({ mensaje: 'Orden no encontrada' });
        }
        res.status(200).json(ordenActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la orden de logística', error });
    }
});

// Eliminar una orden por ID (DELETE)
router.delete('/orders/:id', async (req, res) => {
    try {
        const ordenEliminada = await modelLogistic.findByIdAndDelete(req.params.id); // Eliminar orden por ID
        if (!ordenEliminada) {
            return res.status(404).json({ mensaje: 'Orden no encontrado' });
        }
        res.status(200).json({ mensaje: 'Orden de logística eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la orden de logística', error });
    }
});

//--------------------------------------EndPoint----------------------------------------------------
//Obetener ordenes segun los filtros de busqueda
router.get('/ordenes/negocio/busqueda', async (req, res) => {
    const { orders, asistente, ubicacion } = req.query;
    try {
        const query = {}; // Creamos un objeto vacío para almacenar los filtros
        if (cliente) query.cliente = cliente;
        if (destino) query.destino = destino;
        if (fechaCreacion) query.fechaCreacion = fechaCreacion;
        if (fechaEntrega) query.fechaEntrega = fechaEntrega;
        if (estado) query.estado = estado;

        const orders = await modelLogistic.find(query); // Almacena los resultados de la búsqueda en 'orders'

        if (!orders.length) {
            return res.status(404).json({ mensaje: 'No se encontraron ordenes de logística con los filtros proporcionados' });
        }
        res.status(200).json(orders); // Devuelve los resultados correctos
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las ordenes de logística', error });
    }
});


module.exports = router;