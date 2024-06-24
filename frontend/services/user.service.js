import http from "../http-common";

export default class UserDataService {
  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }
}