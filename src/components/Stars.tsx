import { useState } from "react"
import { StyleSheet, View } from "react-native"

import { Star } from "./Star"

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
    const [quantity, setQuantity] = useState(oldQuantity)

    const renderStars = () => {
        const starsList = []
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!edit}
                    full={i < quantity}
                    big={big}
                />
            )
        }

        return starsList
    }

    return (
        <View style={styles.stars}>
            {renderStars()}
        </View>
    )
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row'
    },
})