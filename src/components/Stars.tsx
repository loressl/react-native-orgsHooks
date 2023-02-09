import { Image, StyleSheet, View } from "react-native"

import star from '../assets/estrela.png'
import grayStar from '../assets/estrelaCinza.png'

interface StarsProps {
    quantity: number
    edit?: boolean
    big?: boolean
}

export function Stars({
    quantity: oldQuantity,
    edit = false,
    big = false
}: StarsProps) {

    const styles = stylesFunction(big)

    return (
        <View style={styles.stars}>
            <Image style={styles.star} source={star} />
            <Image style={styles.star} source={star} />
        </View>
    )
}

const stylesFunction = (big:boolean) => StyleSheet.create({
    stars: {
        flexDirection: 'row'
    },
    star: {
        width: big ? 36:12,
        height: big ? 36:12,
        marginRight: 2
    }
})