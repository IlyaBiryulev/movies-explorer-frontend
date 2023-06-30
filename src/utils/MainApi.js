const BASE_URL = 'http://localhost:3000';

const makeRequest = (url, method, body) => {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers, credentials: "include" };
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${BASE_URL}${url}`, config).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
};

export function register({ name, email, password }) {
  return makeRequest("/signup", "POST", { name, email, password });
}

export function authorize({ email, password }) {
  return makeRequest("/signin", "POST", { email, password });
}

export function getUserInfo() {
  return makeRequest("/users/me", "GET");
}

export function logout() {
  return makeRequest("/signout", "POST");
}

export function setUserProfile({ name, email }) {
  return makeRequest("/users/me", "PATCH", { name, email });
}


export function getCardsByOwner() {
  return makeRequest( "/movies", "GET");
}

export function createMovieCard({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) {
  return makeRequest( "/movies", "POST", {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  });
}

export function deleteCard(id) {
  return makeRequest(`/movies/${id}`, "DELETE");
}

