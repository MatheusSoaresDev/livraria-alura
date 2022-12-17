import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .post("/autores", AutorController.cadastrarAutor)
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)

export default router;