import axios from "axios";

const BASE_URL = "http://127.0.0.1:3001/api";

export async function postData(endpoint, requestBody) {
  const body = requestBody;

  try {
    const response = await axios.post(BASE_URL + endpoint, body);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
