export const signup = async (signupDTO) => {
  return await fetch("http://localhost:8000/auth/signup", {
    method: "POST",
    body: JSON.parse(signupDTO),
  });
};
export const signin = async (signinDTO) => {
  const { access_token } = await fetch("http://localhost:8000/auth/signin", {
    method: "POST",
    body: JSON.parse(signinDTO),
  });

  // Save to local storage
  localStorage.setItem("access_token", access_token);
};
