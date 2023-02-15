import { Producers } from "./components/Producers";

interface HomeProps {
    bestProducers: boolean
}

export function Home({bestProducers}: HomeProps) {
   
    return (
        <Producers bestProducers={bestProducers} />
    )
}