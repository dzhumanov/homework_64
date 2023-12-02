import axiosApi from "./axiosApi";

const fetchData = async () => {
  try {
    const response = await axiosApi.get("posts.json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
