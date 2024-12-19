export const create = async (postDTO) => {
  const access_token = localStorage.getItem("access_token")
  
  const insertTravel = await fetch("htpp://localhost:8000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + access_token,
    }
    body: JSON.parse(postDTO),
  });

  return insertTravel;
};
