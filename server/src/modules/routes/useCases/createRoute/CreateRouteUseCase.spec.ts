import { beforeEach, describe, it } from "vitest";
import { CreateRouteUseCase } from "./CreateRouteUseCase";

let createRouteUseCase: CreateRouteUseCase

describe("Create Route Use Case", () => {
  beforeEach(() => {

  })

  it("should be able to create a new route", async () => {
    const route = await createRouteUseCase.execute({
      userId: "123_id",
      name: "Route Test",
      distance: 10,
      duration: 10,
      origin: ["Origin"],
      destination: ["Destination"],
      originNeighborhood: "Origin Neighborhood",
    })

  })
})