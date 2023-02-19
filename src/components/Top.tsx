import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";

import { TextComponent } from './Text'

import Gradiente from '../assets/gradiente.svg';
import topo from '../assets/topo.png';
import VoltarSVG from '../assets/voltar.svg';

const width = Dimensions.get('screen').width;
const HEIGHT_DEFAULT = 270;

interface ITopComponent {
    title: string
    image?: any
    height?: number
}

export function TopComponent({title, image= topo, height= HEIGHT_DEFAULT}:ITopComponent) {
    const styles = functionStyles(height);
    return(
        <>
            <Image source={image} style={styles.top} />
            <Gradiente width={width} height={130 / 360 * width} style={styles.gradient} />
            <TextComponent newStyles={styles.title} text={title} />
            <TouchableOpacity
                onPress={() => {}}
                style={styles.buttonGoBack}
            >
                <VoltarSVG color="white" styles={styles.goBack} />
            </TouchableOpacity>
        </>
    )
}

const functionStyles = (height: number) => StyleSheet.create({
    top: {
      width: "100%",
      height: height,
    },
    gradient: {
      position: 'absolute',
    },
    title: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16,
    },
    buttonGoBack: {
      position: 'absolute',
      padding: 17,
    },
    goBack: {
      width: 24,
      height: 24,
    },
  });