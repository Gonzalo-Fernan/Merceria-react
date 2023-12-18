
//useFetch es un custom hook para usar fetch con parametro url para usar en otras partes del proyecto consumiendo otras APIs
import { useState, useEffect } from "react"  
import { useParams } from "react-router-dom";

export function useFetch(url) {
    const [ data, setData ] = useState(null);

    const { categoria } = useParams()


    useEffect(() =>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const filteredData = categoria ? data.filter(prod => prod.categoria.toLowerCase() === categoria.toLowerCase()) : data;
            setData(filteredData);
        })
        .catch(error => console.error('Error fetching data:', error));
      
    },[categoria]);

    return { data };    
}

