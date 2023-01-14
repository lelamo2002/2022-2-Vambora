import axios from "axios";
import { LOCALHOST } from "@env"

const port = "3333";

if (!LOCALHOST) {
  console.log("Lembre-se de colocar o IP gerado pelo expo no .env com o nome LOCALHOST=seuip");
}

export const api = axios.create({
  baseURL: `http://${LOCALHOST}:${port}`,
});
