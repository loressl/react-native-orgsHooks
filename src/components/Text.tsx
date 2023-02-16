import {Text, StyleSheet} from 'react-native'

interface TextComponentProps {
    text: string
    newStyles?: any
}

export function TextComponent({text, newStyles}: TextComponentProps){

    let defaultStyle = styles.text

    if(newStyles?.fontWeight === 'bold') {
        defaultStyle = styles.textBold
    }

    return(
        <Text style={[defaultStyle, newStyles]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        //fontFamily: "MontSerratRegular",
        fontWeight: 'normal'
    },
    textBold: {
        //fontFamily: "MontSerratBold",
        fontWeight: 'normal'
    }
})