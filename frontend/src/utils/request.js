export function request(url, method, data) {
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
    },
    method: method || "GET",
    body: data ? JSON.stringify(data) : undefined,
  })
    .then((data) => data.json())
    .catch((e) => console.log(e));
}
