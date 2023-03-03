import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Producer } from "../../../../types";
import { TextComponent } from '../../../components/Text'
import { useTexts } from "../../../hooks/useTexts";

interface DetailsProps {
    name: string
    producer: Producer
    description: string
    price: string
}

export function DetailsComponent({ name, producer, description, price }: DetailsProps) {
    const text = useTexts()
    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    return (
        <>
            <TextComponent text={name} newStyles={styles.name} />
            <View style={styles.farm}>
                <Image style={styles.imageFarm} source={producer.image} />
                <TextComponent text={producer.name} newStyles={styles.nameFarm} />
            </View>
            <TextComponent text={description} newStyles={styles.description} />
            <TextComponent text={price} newStyles={styles.price} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('HomeScreen', { buy: { name } })}
            >
                <TextComponent newStyles={styles.textButton} text={text.buttonBut} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imageFarm: {
        width: 32,
        height: 32
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: "#2a9f85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    button: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textButton: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
})