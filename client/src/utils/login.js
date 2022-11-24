export const loginAction = (loginData) => {
  return fetch("/login", {
    method: "GET",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
