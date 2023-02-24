import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Basket as BasketType, Producer } from "../../../../types";
import { TextComponent } from "../../../components/Text";

type BasketProps = {
    item: BasketType
    producer: Pick<Producer, 'name' | 'image' >
}

export function Basket({item, producer}: BasketProps) {
    const { details, items } = item
    const { description, image, name, price } = details

    return(
        <TouchableOpacity
            style={styles.basket}
        >
            <View style={styles.context}>
                <Image source={image} style={styles.image}/>
                <View style={styles.texts}>
                    <TextComponent newStyles={styles.name} text={name} />
                    <TextComponent newStyles={styles.description} text={description} />
                    <TextComponent newStyles={styles.price} text={price} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingHorizontal: 16,
    },
    context: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
    },
    image: {
        width: 62,
        height: 62,
        borderRadius: 6,
    },
    texts: {
        flex: 1,
        marginLeft: 8,
    },
    name: {
        color: '#464646',
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    description: {
        color: '#A3A3A3',
        fontSize: 14,
        lineHeight: 22,
    },
    price: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginTop: 4,
    }
});