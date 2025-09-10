import { Router } from "express";
import { EmpanadaService } from "../services/empanada.service";
import { EmpanadaController } from "./controller";

export class EmpanadaRoutes {
  static get routes(): Router {
    const router = Router();
    const empanadaService = new EmpanadaService();
    const controller = new EmpanadaController(empanadaService);

    router.get("/", controller.getEmpanadas);
    router.get("/:id", controller.getEmpanadaById);
    router.post("/", controller.storeEmpanada);
    router.put("/:id", controller.putEmpanada);
    router.delete("/:id", controller.deleteEmpanada);
    // router.post("/", [AuthMiddleware.validateJWT], controller.createCategory);

    return router;
  }
}
