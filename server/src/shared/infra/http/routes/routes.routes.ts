import { CreateRouteController } from "@modules/routes/useCases/createRoute/CreateRouteController";
import { ListRoutesByNeighborhoodController } from "@modules/routes/useCases/listRoutesByNeighborhoodUseCase/ListRoutesByNeighborhoodController";
import { ListRoutesByUserController } from "@modules/routes/useCases/listRoutesByUser/ListRoutesByUserController";
import ensureAuthenticated from "@shared/middlewares/ensureAuthenticated";
import { Router } from "express";

export const routesRoutes = Router()

const createRouteController = new CreateRouteController()
const listRoutesByUserUseCase = new ListRoutesByUserController()
const listRoutesByNeighborhoodUseCase = new ListRoutesByNeighborhoodController()

routesRoutes.post("/:id", ensureAuthenticated, createRouteController.handle)
routesRoutes.get("/user/:id", ensureAuthenticated, listRoutesByUserUseCase.handle)
routesRoutes.get("/:neighborhood", ensureAuthenticated, listRoutesByNeighborhoodUseCase.handle)