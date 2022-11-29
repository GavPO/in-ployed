export const loginAction = (loginData) => {
  return fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
