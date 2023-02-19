import { View, Image, StyleSheet } from 'react-native'
import { Item } from '../../../../types'
import { TextComponent } from '../../../components/Text'

interface ItemProps {
    item: Item
}

export function ItemComponent({ item: { name, image } }: ItemProps) {

    return (
        <View style={styles.item}>
            <Image style={styles.image} source={image} />
            <TextComponent text={name} newStyles={styles.name} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})