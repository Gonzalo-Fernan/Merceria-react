
//useFetch es un custom hook para usar fetch con parametro url para usar en otras partes del proyecto consumiendo otras APIs
import { useState, useEffect } from "react"  


export function useFetch(url) {
    const [ data, setData ] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
    },[]);

    return { data };    
}

