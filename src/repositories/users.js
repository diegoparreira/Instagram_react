import config from "../config";

const URL_USERS = `${config.URL}/users`;

function create(user) {
  console.log(user);
  return fetch(URL_USERS, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Não foi possivel cadastrar o novo usuário");
  });
}

export default { URL_USERS, create };
