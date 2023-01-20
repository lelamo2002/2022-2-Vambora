export interface ICreateRouteDTO {
  userId: string,
  originName: string,
  destinationName: string,
  distance: number,
  duration: number,
  origin: string[],
  destination: string[],
  originNeighborhood: string,
  originNeighborhoodSlug: string,
}