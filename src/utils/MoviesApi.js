import { MOVIE_API } from "./constants.js";

const makeRequest = (url, method, body) => {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers };

  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${MOVIE_API}${url}`, config).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
};

export function getMovies() {
  return makeRequest("/beatfilm-movies", "GET");
}
