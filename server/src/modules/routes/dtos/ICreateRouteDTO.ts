export interface ICreateRouteDTO {
  userId: string,
  name: string,
  distance: number,
  duration: number,
  origin: string[],
  destination: string[],
  originNeighborhood: string,
}