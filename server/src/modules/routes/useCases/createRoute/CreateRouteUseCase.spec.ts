import "reflect-metadata"
import { beforeEach, describe, expect, it } from "vitest"
import { CreateRouteUseCase } from "./CreateRouteUseCase"
import { IRoutesRepository } from "@modules/routes/repositories/IRoutesRepository"
import { RoutesRepostoryInMemory } from "@modules/routes/repositories/in-memory/RoutesRepositoryInMemory"

let routesRepositoryInMemory: IRoutesRepository
let createRouteUseCase: CreateRouteUseCase

describe("Create Route Use Case", () => {
  beforeEach(() => {
    routesRepositoryInMemory = new RoutesRepostoryInMemory()
    createRouteUseCase = new CreateRouteUseCase(routesRepositoryInMemory)
  })

  it("should be able to create a new route", async () => {
    const route = await createRouteUseCase.execute({
      userId: "fixed",
      name: "Route Test",
      distance: 10,
      duration: 10,
      origin: ["12312", "123124"],
      destination: ["123123", "1234124"],
      originNeighborhood: "Origin Neighborhood",
    })

    expect(route).toHaveProperty("id")
  })
})