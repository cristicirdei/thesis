export const fetchWrapper = { get, post };

const APPLICATION_JSON = "application/json";

async function get(url) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": APPLICATION_JSON,
      Accept: APPLICATION_JSON,
      Authorization: localStorage.getItem("token"),
    },
    withCredentials: true,
  };
  const response = await fetch(url, requestOptions);
  return response;
}

async function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": APPLICATION_JSON,
      Accept: APPLICATION_JSON,
      Authorization: localStorage.getItem("token"),
    },
    withCredentials: true,
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions);
  return response;
}

export const handleResponse = async (dispatch, response, type) => {
  const data = await response.json();
  if (!response.ok) {
    console.log(data);
    if (data.detail !== "No event was found") {
      alert(data.detail);
    }
    return dispatch({
      type: `${type}_ERROR`,
      payload: data,
    });
  }
  if (type === "SIGN_IN") {
    localStorage.setItem("token", data.token);
  }
  if (type === "SIGN_UP") {
    localStorage.setItem("signup", true);
  }

  return dispatch({
    type: `${type}_SUCCESS`,
    payload: data,
  });
};
