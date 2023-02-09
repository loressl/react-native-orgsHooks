import { ElementType, useEffect, useState } from "react"
import { FlatList, StyleSheet, Text } from "react-native"
import { loadingProducers } from "../../../servers/loadingData"
import { Producer } from "./Producer"

interface ProducersProps {
    Top: ElementType
}

export function Producers({Top}: ProducersProps){
    const [title, setTitle] = useState('')
    const [list, setList] = useState<any[]>([])

    useEffect(() => {
        const response = loadingProducers()
        setTitle(response.title)
        setList(response.list)
    }, [])

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
                data={list}
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