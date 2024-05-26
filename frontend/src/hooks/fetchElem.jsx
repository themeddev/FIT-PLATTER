import { useEffect, useState } from "react";

const FetchElem = () => {
    
    const [elements, setElements] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true); // Set loading to true before fetch

        fetch('http://127.0.0.1:8000/api/element')
            .then(res => res.json())
            .then(data => {
                setElements(data);
                setLoading(false); 
            })
            .catch(err => {
                console.log(err);
                setLoading(false); 
            });
    
    }, []);
    
    
    return [elements, setElements, loading];
}
 
export default FetchElem;
