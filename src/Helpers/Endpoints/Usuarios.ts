import { endpoint } from "./Endpoints";

export const usuarios = {
  createUsers: () => `${endpoint.baseUrl}/users/create`,
  listUsers: () => `${endpoint.baseUrl}/users`,

};
