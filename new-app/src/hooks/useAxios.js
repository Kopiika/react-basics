import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url, method = "get") => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios[method](url);
				setData(response.data);
				setLoading(false);
				
			} 
			catch (error) {
				setError(error);
				setLoading(false);
			}
		}
		fetchData();

	}, [url]);

  return {data, error, loading}
};

export default useAxios;