import { useRoute } from "@react-navigation/native"
import { FlatList, StyleSheet, View } from "react-native"
import { Producer, Item, Details } from "../../../types"
import { TextComponent } from "../../components/Text"

import { TopComponent } from '../../components/Top'
import { useTexts } from "../../hooks/useTexts"
import { DetailsComponent } from "./components/Details"
import { ItemComponent } from "./components/Item"

type RouteParams = {
    producer: Producer
    items: Item[]
    details: Details
}

export function Basket() {
    const route = useRoute()
    const text = useTexts()

    const {producer, items, details} = route.params as RouteParams

    return (
        <>
            <FlatList
                data={items}
                renderItem={ItemComponent}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() =>
                    <>
                        <TopComponent title={text.topBasket} />
                        <View style={styles.basket}>
                            <DetailsComponent
                                producer={producer}
                                price={details.price}
                                description={details.description}
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