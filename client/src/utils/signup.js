export const signupAction = (signupData) => {
  return fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(signupData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
