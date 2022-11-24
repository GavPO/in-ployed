export const signupAction = (signupData) => {
  return fetch("/users", {
    method: "POST",
    body: JSON.stringify(signupData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
