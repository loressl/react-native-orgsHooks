import { useRoute } from "@react-navigation/native";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Producer as ProducerType } from "../../../types";
import { TopComponent } from "../../components/Top";
import { useTexts } from "../../hooks/useTexts";
import { Basket } from "./components/Basket";

import top from '../../assets/produtores/topo.png'

export function Producer() {
    const route = useRoute()
    const texts = useTexts()
    const producer = route.params as ProducerType

    const TopList = () => {
        return(
            <>
                <TopComponent title={texts.titleProducer} image={top} height={150} />
                <View style={styles.context}>
                    <View style={styles.logo}>
                        <Image source={producer.image} style={styles.imageProducer} />
                        <Text style={styles.producer}>{producer.name}</Text>
                    </View>

                    <Text style={styles.baskets}>{texts.titleBaskets}</Text>
                </View>
            </>
        )
    }

    return (
        <FlatList 
            ListHeaderComponent={TopList}
            data={producer.baskets}
            keyExtractor={(item) => item.details.name}
            renderItem={({ item }) => 
                <Basket 
                    item={item} 
                    producer={{image: producer.image, name: producer.name}}
                />
            }
            style={styles.list}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#ffffff"
    },
    context: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row'
    },
    imageProducer: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    producer: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    baskets: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});