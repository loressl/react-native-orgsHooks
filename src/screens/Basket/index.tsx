import { FlatList, StyleSheet, View } from "react-native"
import { Producer } from "../../../types"
import { TextComponent } from "../../components/Text"

import { TopComponent } from '../../components/Top'
import { useTexts } from "../../hooks/useTexts"
import { DetailsComponent } from "./components/Details"
import { ItemComponent } from "./components/Item"


interface BasketProps {
    producer: Producer
}

export function Basket({producer}: BasketProps) {
    const text = useTexts()

    return (
        <>
            <FlatList
                data={producer.baskets[0].items}
                renderItem={ItemComponent}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() =>
                    <>
                        <TopComponent title={text.titleBaskets} />
                        <View style={styles.basket}>
                            <DetailsComponent
                                producer={producer}
                                price={producer.baskets[0].details.price}
                                description={producer.baskets[0].details.description}
                                name={producer.name}
                            />
                            <TextComponent text={text?.titleItens} newStyles={styles.title} />
                        </View>
                    </>
                }
            />

        </>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    title: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    list: {
        backgroundColor: "#ffffff"
    }
})