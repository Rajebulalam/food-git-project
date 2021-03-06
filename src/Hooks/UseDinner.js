import { useEffect, useState } from "react";

const UseDinner = () => {
    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])

    return [dinner, setDinner];
}

export default UseDinner;