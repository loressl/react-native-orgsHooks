import { useMemo, useReducer } from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Stars } from "../../../components/Stars"

export interface ProducerProps {
    name: string
    image: any
    distance: number
    stars: number
    onPress: () =>  void
}

const distanteInMeters = (distance: number) => {
    return `${distance}m`
}

export function Producer({name, image, distance, stars, onPress }: ProducerProps) {
    const [select, invertSelect] = useReducer(
        (select) => !select,
        false 
    )

    const distanteText = useMemo(() => distanteInMeters(distance),[distance]) 

    return(
        <TouchableOpacity style={styles.card} onPress={invertSelect}>
            <Image style={styles.image} source={image} accessibilityLabel={name} />
            <View style={styles.information}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Stars quantity={stars} edit={select} big={select} />
                </View>
                <Text style={styles.distance}>{distanteText}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: "#f6f6f6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        //android
        elevation: 4,
        //ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    information: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold"
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    }
})