import { ElementType } from "react"
import { FlatList, StyleSheet, Text } from "react-native"
import { useProducers } from "../../../hooks/useProducers"
import { Producer } from "./Producer"

interface ProducersProps {
    Top: ElementType
}

export function Producers({Top}: ProducersProps){
    const [title, list] = useProducers()

    const topList = () => {
        return(
            <>
                <Top />
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