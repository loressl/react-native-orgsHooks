import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { loadingTop } from '../../../servers/loadingData'

import logo from '../../../assets/logo.png'

export function Top() {
    const [top, setTop] = useState({
        welcome: '',
        legend: ''
    })

    useEffect(() => {
        if (loadingTop()) {
            setTop({
                welcome: loadingTop().welcome,
                legend: loadingTop().legend
            })
        }
    }, [])

    return (
        <View style={styles.top}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}>{top.welcome}</Text>
            <Text style={styles.legend} >{top.legend}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    legend: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
});
