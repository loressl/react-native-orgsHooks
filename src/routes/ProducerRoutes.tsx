import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Producer } from "../screens/Producer"
import { Home } from "../screens/Home";

type ProducerRoutesProps = {
    MainComponent?: any
}

const Stack = createNativeStackNavigator()

export function ProducerRoutes({ MainComponent = Home }: ProducerRoutesProps){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={MainComponent} />
            <Stack.Screen name="Produtor" component={Producer} />
        </Stack.Navigator>
    )
}