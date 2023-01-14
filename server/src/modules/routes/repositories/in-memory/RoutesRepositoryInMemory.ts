import { ICreateRouteDTO } from "@modules/routes/dtos/ICreateRouteDTO";
import { Route } from "@prisma/client";
import { IRoutesRepository } from "../IRoutesRepository";

class RoutesRepostoryInMemory implements IRoutesRepository {
  private routesRepository: Route[] = []

  async create(data: ICreateRouteDTO): Promise<Route> {
    const { name, destination, distance, duration, origin, originNeighborhood } = data;

    const route: Route = Object.assign({
      id: Math.random().toString(36).substr(2, 9),
      userId: "fixed",
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

  async findById(id: string): Promise<Route | null> {
    const route = this.routesRepository.find((route) => {
      return route.id === id
    })

    if (route) return route
    else return null
  }

  async listByUser(userId: string): Promise<Route[] | null> {
    const routes = this.routesRepository.filter((route) => {
      return route.createdBy === userId
    })

    if (routes) return routes
    else return null
  }
}

export { RoutesRepostoryInMemory }