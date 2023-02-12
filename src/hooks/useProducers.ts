import { useEffect, useState } from "react"
import { loadingProducers } from "../servers/loadingData"

export function useProducers(){
    const [title, setTitle] = useState('')
    const [list, setList] = useState<any[]>([])

    useEffect(() => {
        const response = loadingProducers()
        response.list.sort(
            (itemA, itemB) => itemA.distance - itemB.distance,
        )
    
        setTitle(response.title)
        setList(response.list)
    }, [])

    return [title, list]
}