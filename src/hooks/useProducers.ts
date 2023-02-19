import { useEffect, useState } from "react"
import { Producer, Producers } from "../../types"
import { loadingProducers } from "../servers/loadingData"

interface IUseProducers {
    bestProducers: boolean
}

export function useProducers({bestProducers}: IUseProducers){
    const [title, setTitle] = useState('')
    const [list, setList] = useState<Producer[]>()

    useEffect(() => {
        const response = loadingProducers() as Producers
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

    return {title, list}
}