import { useEffect, useState } from "react"


function useFetchData(url) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [url])
    async function fetchData() {

        const resp = await fetch(url)
        setData(await resp.json())
    }
    return [data]
}

export default useFetchData