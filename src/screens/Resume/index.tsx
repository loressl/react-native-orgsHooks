import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { useTexts } from "../../hooks/useTexts";

import BackSVG from '../../assets/voltar.svg'
import success from '../../assets/sucesso.png'
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { SafeAreaView } from "react-native-safe-area-context";


type RouteParams = {
    buy: {
        name: string
        timestamp: any
    }
}

export function Resume() {
    const route = useRoute()
    const { goBack, pop, navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const texts = useTexts()

    const value = route.params as RouteParams
    const fullMessage = texts.buyMessage?.replace('$NAME', value.buy.name)

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.top}>
                <TouchableOpacity
                    style={styles.topBack}
                    onPress={() => goBack()}
                >
                    <BackSVG />
                </TouchableOpacity>

                <Text style={styles.topText} >{texts.buyTop}</Text>
            </View>

            <View style={styles.context}>
                <Image source={success} style={styles.success} />

                <View style={styles.text}>
                    <Text style={styles.title}>{texts.buyTitle}</Text>
                    <Text style={styles.message}>{fullMessage}</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('HomeScreen', { buy: value.buy })}
                    >
                        <Text style={styles.textButton}>{texts.homeBuyButton}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonProducer]}
                        onPress={() => pop(2)}
                    >
                        <Text style={[styles.textButton, styles.textButtonProducer]}>{texts.producerBuyButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    top: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: 58,

        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        paddingVertical: 16,
        paddingHorizontal: 40,
    },
    topText: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    topBack: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 16,
        top: 17,
    },
    context: {
        zIndex: 0,
    },
    success: {
        width: "100%",
        height: undefined,
        aspectRatio: 360 / 351,
    },
    text: {
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646",
    },
    message: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    buttonProducer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ECECEC",
    },
    textButtonProducer: {
        color: "#464646",
    },
});