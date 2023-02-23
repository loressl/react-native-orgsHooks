import { ProducerRoutes } from "./ProducerRoutes";
import { BestProducers } from '../screens/BestProducers'

export function BestProducersRoutes(){
    return(
        <ProducerRoutes MainComponent={BestProducers} />
    )
}