import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {    //==Yahan custom hook ban raha hai jo ek url parameter leta hai.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);   //==loading = true API request start ho rahi hai
        setData(null);
        setError(null);
        const res = await axios.get(url); //==axios API call bhej raha hai
        setData(res.data);    //==API ka data state me save ho gaya
      } catch (error) {
        setError(error.message || "Kuch tw gadh badh hai!")
      } finally {    //===API ka data state me save ho gaya
        setLoading(false);
      }
    }

    fetchData();

  }, [url]);

  return {data,loading,error}

}

export default useFetch