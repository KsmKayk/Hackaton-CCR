const { Router } = require("express");
const empresaController = require("../controller/empresaController")

const routes = Router();
routes.get("/empresas", empresaController.index)

module.exports = routes;