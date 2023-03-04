import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { Producer as ProducerType } from "../../../types";
import { useProducers } from "../../hooks/useProducers";
import { useTexts } from "../../hooks/useTexts";
import { Producer } from "./components/Producer";
import { Top } from "./components/Top";

interface ProducersProps {
    bestProducers: boolean
}

type RouteParams = {
    buy: {
        name: string
        timestamp: any
    }
}

export function Producers({bestProducers}: ProducersProps) {
    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const route = useRoute()
    const text = useTexts()

    const [showMessage, setShowMessage] = useState(false)
    const [fullMessage, setFullMessage] = useState<any>(undefined)

    const value = route.params as RouteParams

    const { title, list } = useProducers({ bestProducers })
    
    useEffect(() => {
        let timeout: number;
        
        if(value) {
            setFullMessage(text.buyMessage?.replace('$NAME', value.buy.name))
            setShowMessage(!!value)
            timeout = setTimeout(()=> {
                setShowMessage(false)
                setFullMessage(undefined)
            }, 3000)
        }

        return () => clearTimeout(timeout)

    },[value.buy.timestamp])

    const topList = () => {
        return (
            <>
                <Top bestProducers={bestProducers} />
                { showMessage && <Text style={styles.buy}>{fullMessage}</Text>}
                <Text style={styles.title}>{title}</Text>
            </>
        )
    }

    const handleProducer = (item: ProducerType) =>{
        navigate('Produtor', item)
    }

    return (
        <FlatList
            data={list}
            renderItem={({ item }) => 
                <Producer 
                    name={item.name} 
                    distance={item.distance} 
                    image={item.image}
                    stars={item.stars}
                    onPress={() => handleProducer(item)} 
                />
            }
            keyExtractor={({ name }) => name}
            ListHeaderComponent={topList}
            style={styles.list}
        />

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
    },
    list: {
        backgroundColor: "#ffffff"
    },
    buy: {
        backgroundColor: '#eaf5f3',
        padding: 16,
        color: '#464646',
        fontSize: 16,
        lineHeight: 26
    }
})