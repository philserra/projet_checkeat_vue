export const BACKEND_URL = "http://127.0.0.1:8000";
const headers = {
  "Content-Type": "application/json",
};

export const getProfil = async (params = {}) => {
  const id = params.id;
  const options = {
    method: "GET",
    headers,
  };
  const response = await fetch(
    `${BACKEND_URL}/api/restaurateurs/${id}`,
    options
  );
  const data = await response.json();

  return data.restaurateur;
};

export const editProfil = async (params = {}) => {
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({
      lastname: params.lastname,
      firstname: params.firstname,
      siret: params.siret,
      email: params.email,
      phone: params.phone,
      password: params.password,
    }),
  };
  const response = await fetch(
    `${BACKEND_URL}/api/restaurateurs/${params.id}`,
    options
  );
  const data = await response.json();
  return data.restaurateur;
};
