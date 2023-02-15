import { useEffect, useState } from "react"
import { loadingProducers } from "../servers/loadingData"

interface IUseProducers {
    bestProducers: boolean
}

export function useProducers({bestProducers}: IUseProducers){
    const [title, setTitle] = useState('')
    const [list, setList] = useState<any[]>([])

    useEffect(() => {
        const response = loadingProducers()
        response.list.sort(
            (itemA, itemB) => itemA.distance - itemB.distance,
        )
        let newList = response.list;
        if(bestProducers) {
            newList = newList.filter((item) => item.stars > 3)
        }
    
        setTitle(response.title)
        setList(newList)
    }, [bestProducers])

    return [title, list]
}