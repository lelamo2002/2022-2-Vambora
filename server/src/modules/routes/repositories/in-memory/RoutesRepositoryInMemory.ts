import { ICreateRouteDTO } from "@modules/routes/dtos/ICreateRouteDTO";
import { Route } from "@prisma/client";
import { IRoutesRepository } from "../IRoutesRepository";

class RoutesRepostoryInMemory implements IRoutesRepository {
  private routesRepository: Route[] = [];

  async create(data: ICreateRouteDTO): Promise<Route> {
      const { name, description, destination, distance, duration, origin, originNeighborhood } = data;

      const route: Route = Object.assign({
        userId: "123",
        name,
        origin,
        description,
        destination,
        duration,
        distance,
        originNeighborhood
      })

      this.routesRepository.push(route)
      return route;
  }
}

export { RoutesRepostoryInMemory }