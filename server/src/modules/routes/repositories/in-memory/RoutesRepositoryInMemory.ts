import { ICreateRouteDTO } from "@modules/routes/dtos/ICreateRouteDTO";
import { Route } from "@prisma/client";
import { IRoutesRepository } from "../IRoutesRepository";

class RoutesRepostoryInMemory implements IRoutesRepository {
  
  async create(data: ICreateRouteDTO): Promise<Route> {
    const { name, destination, distance, duration, origin, originNeighborhood } = data;
    
    const route: Route = Object.assign({
      userId: "123",
      name,
      origin,
      destination,
      duration,
      distance,
      originNeighborhood
    })
    
    this.routesRepository.push(route)
    return route;
  }
  findById(id: string): Promise<Route | null> {
    throw new Error("Method not implemented.");
  }
  listByUser(userId: string): Promise<Route[] | null> {
    throw new Error("Method not implemented.");
  }
  private routesRepository: Route[] = [];
}

export { RoutesRepostoryInMemory }