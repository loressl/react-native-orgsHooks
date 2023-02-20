import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useProducers } from "../hooks/useProducers";
import { BestProducers } from "../screens/BestProducers";
import { Home } from "../screens/Home";

const Tab= createBottomTabNavigator();

export function AppRoutes() {
    const response = useProducers({bestProducers: false})

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Melhores Produtores' component={BestProducers} />
            </Tab.Navigator>
            {/* {response?.list && response.list.length > 0  && 
        
          <Basket 
            producer={response.list[0]}
          />
        } */}
        </NavigationContainer>
    )
}