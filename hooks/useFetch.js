import { useEffect, useState } from "react";
// import { RAPID_API_KEY } from "@env";
import axios from "axios";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": "a0f0623458msh70c7681879d21b0p1d2fbdjsnff9f6e748b70",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: { ...query }, // 다이나믹쿼리를 할꺼라서 api에서 가져온 것말고
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };

  // console.log(data);
};

export default useFetch;
