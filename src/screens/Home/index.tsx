import { Producers } from "./components/Producers";
import { Top } from "./components/Top";

export function Home() {
    return (
        <Producers Top={Top} />
    )
}