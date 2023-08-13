import { useState, useEffect } from "react";

const Usefetch = (url) => {


    const [data,setData] = useState(null);
    const [ispending,setIspending] =useState(true);
    const [error,seterror] = useState(null);

    useEffect(()=>
        {
        const abortCont = new AbortController();

            fetch(url, {signal: abortCont.signal})
              .then((res)=>
               {
                if(!res.ok)
                {
                    throw Error("Could not fetch the data for that resources");
                }
                return res.json();
               })
               .then((data)=>{
                  setData(data);
                  setIspending(false);
                  seterror(null);
               })
               .catch((err)=>
                 {
                    if(err.name==='AbortError')
                    {
                        console.log('fetch aborted');
                    }
                    else{
                        setIspending(false);
                        seterror(err.message);
                    }
                   
                 })

                 return () => abortCont.abort();
        },[url]);
    
        return {data, ispending, error}
}
 
export default Usefetch ;