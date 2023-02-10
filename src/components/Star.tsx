import { Image, StyleSheet, TouchableOpacity } from "react-native";

import star from '../assets/estrela.png'
import grayStar from '../assets/estrelaCinza.png'

interface StarProps {
    onPress: () => void
    disabled: boolean
    full: boolean
    big: boolean
}

export function Star({
    onPress, 
    disabled= true, 
    full,
    big = false
}: StarProps) {
    const styles = stylesFunction(big)

    const getImage = () => {
        if(full) {
            return star
        }
        return grayStar
    }

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Image style={styles.star} source={getImage()} />
        </TouchableOpacity>
    )
}

const stylesFunction = (big:boolean) => StyleSheet.create({
    star: {
        width: big ? 36:12,
        height: big ? 36:12,
        marginRight: 2
    }
})