// Every react custom hooks must start wt the key word 'use'
// This will be reusable in other components and easy to manage in one file
import { useState, useEffect } from "react";
const useFetch = (url)=>{
    // Array destructuring
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

    useEffect(() => {
		console.log("use effect runs on first render and re-render");
		fetch(url)
		.then(res=> {
			if (!res.ok) {
				throw Error("Unable to fetch the data for this resource!")
				
			}
			return res.json()
		})
		  .then(data=>{
			  setData(data);
			//   After loading the data setIsLoading to false
			setIsLoading(false)
			setError(null)
			}).catch(err=>{
				setIsLoading(false)
				// console.log(err.message);
				setError(err.message)
			})
		
	}, [url]);

    return{data,isLoading,error}


}

export default useFetch