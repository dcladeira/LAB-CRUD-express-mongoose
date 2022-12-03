import express from 'express';
import Purchase from '../models/purchase.model.js';
import Album from '../models/album.model.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const addNewPurchase = await Purchase.create(request.body);
        return response.status(201).json(addNewPurchase);
    } catch(error) {
        console.log(error);
        return response.status(500).json({ msg: "Ocorreu um erro, verifique o terminal."});
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const getPurchaseById = await Purchase.findById(id).populate("album");
        return response.status(200).json(getPurchaseById);
    } catch(error) {
        console.log(error);
        return response.status(500).json({ msg: "Ocorreu um erro, verifique o terminal."});
    }
});

export default router;