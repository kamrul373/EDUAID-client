import { useEffect, useState } from "react";

const loadcategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://eduaid-server-side.vercel.app/categories")
            .then(response => response.json())
            .then(categories => setCategories(categories));
    }, []);
}

export default loadcategory;