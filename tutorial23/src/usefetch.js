import { useState ,useEffect } from "react";
const useFetch =(url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPendinging] = useState(true);
    const [error ,setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res);
                    if (!res.ok){
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    console.log(data);
                    setData(data)
                    setIsPendinging(false);
                    setError(null);
                }) 
                .catch((err =>{
                    setIsPendinging(false);
                    setError(err.message);
                }))
        }, 1000);
    }, [url]);
    return {data ,isPending ,error}
}

export default useFetch;