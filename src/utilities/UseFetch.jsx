import React, { useEffect, useState } from "react";


const UseFetch = (url) => {
    const [data , setData] = useState(null);
    const [error, setError] = useState("")
    const [loading , setLoading] = useState(true)

    useEffect (() => {
        const getData = async () => {
            try {
                const response = await fetch (url);
                const result = await response.json();
                setData(result)
            }
    
            catch (err) {
                setError(error)
            }
    
            finally {
                setLoading (false)
            }
        }

        getData();
    },[url , error])


    return {data , error , loading}


}

export default UseFetch