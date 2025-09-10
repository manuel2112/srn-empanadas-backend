import { Router } from "express";

import { EmpanadaRoutes } from "./empanadas/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/empanadas", EmpanadaRoutes.routes);

    return router;
  }
}
