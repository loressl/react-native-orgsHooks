import { FlatList, StyleSheet, Text } from "react-native"
import { useProducers } from "../../../hooks/useProducers"
import { Producer } from "./Producer"
import { Top } from '../components/Top'

interface ProducersProps {
    bestProducers: boolean
}

export function Producers({bestProducers}: ProducersProps){
    const [title,list] = useProducers({bestProducers})

    const topList = () => {
        return(
            <>
                <Top bestProducers={bestProducers} />
                <Text style={styles.title}>{title}</Text>
            </>
        )
    }

    return(
        <>
            <FlatList 
                data={list as any[]}
                renderItem={({item}) => <Producer {...item} />}
                keyExtractor={({name}) => name}
                ListHeaderComponent={topList}
            />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: "#464646"
    }
})