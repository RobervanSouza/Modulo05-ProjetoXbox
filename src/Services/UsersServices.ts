import { Api } from "../Helpers/Endpoints/Api";
import { endpoint } from "../Helpers/Endpoints/Endpoints";
import { User, UserUpdate } from "../components/Api/Users";

export const UserService = {
  getLista: () =>
    Api(endpoint.listUsers(), {
      method: "GET",
    }).then((response) => response.json()),

  create: (user: User) =>
    Api(endpoint.createUsers(), {
      method: "POST",
      body: JSON.stringify(user),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),
}