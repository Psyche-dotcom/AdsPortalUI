import axios from "axios";
export const fetchData = async (url, auth) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: auth,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateData = async (url, data) => {
  try {
    const response = await axios.put(url, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postData = async (url, data, auth) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: auth,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
