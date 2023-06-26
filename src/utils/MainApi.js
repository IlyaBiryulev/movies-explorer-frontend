const BASE_URL = 'https://api.moviedomen.nomoredomains.rocks';

const makeRequest = (url, method, credentials, body) => {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers };
  if(credentials) {
    config.credentials = "include";
  }
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
  return makeRequest("/signup", "POST", true, { name, email, password });
}

export function authorize({ email, password }) {
  return makeRequest("/signin", "POST", true, { email, password });
}

export function logout() {
  return makeRequest("/users/me", "DELETE", true);
}

export function getUserInfo() {
  return makeRequest("/users/me", "GET", true);
}


export function setUserProfile({ name, email }) {
  return makeRequest("/users/me", "PATCH", true, { name, email });
}

