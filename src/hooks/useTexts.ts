import { useEffect, useState } from "react";
import { loadingTexts } from "../servers/loadingData";

interface ITexts {
    legendBestProducers: string
    titleProducers: string
    titleProducer: string
    titleBaskets: string
    topBasket: string
    buttonBut: string
    titleItens: string
    buyMessage: string
}

export function useTexts() {
    const [texts, setTexts] = useState({} as ITexts)

    useEffect(() => {
        const response = loadingTexts()
        setTexts(response)
    }, [])

    return texts
}