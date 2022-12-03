import express from 'express';
import Album from '../models/album.model.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const addNewAlbum = await Album.create(request.body);
        return response.status(201).json(addNewAlbum);
    } catch(error) {
        console.log(error);
        return response.status(500).json({ msg: "Ocorreu um erro, verifique o terminal."});
    }
});

router.get('/', async (request, response) => {
    try {
        const getAllAlbums = await Album.find();
        return response.status(200).json(getAllAlbums);
    } catch(error) {
        console.log(error);
        return response.status(500).json({ msg: "Ocorreu um erro, verifique o terminal."});
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const getAlbumById = await Album.findById(id);
        return response.status(200).json(getAlbumById);
    } catch(error) {
        console.log(error);
        return response.status(500).json({ msg: "Ocorreu um erro, verifique o terminal."});
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const updateAlbum = await Album.findByIdAndUpdate(
            id,
            { ...request.body },
            { new: true, runValidators: true}
            );
        return response.status(200).json(updateAlbum);
    } catch(error) {
        console.log(error);
        return response.status(500).json({ msg: "Ocorreu um erro, verifique o terminal."});
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deleteAlbum = await Album.findByIdAndDelete(id);
        return response.status(204).json();
    } catch(error) {
        console.log(error);
        return response.status(500).json({ msg: "Ocorreu um erro, verifique o terminal."});
    }
});

export default router;