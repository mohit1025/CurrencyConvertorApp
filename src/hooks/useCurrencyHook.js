import { useEffect, useState } from "react";

function useCurrencyHook(currency = "inr") {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    useEffect(() => {
        console.log(data); // Logging inside useEffect to capture updated state
    }, [data]);

    return data;
}

export default useCurrencyHook;
