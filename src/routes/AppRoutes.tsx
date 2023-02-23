import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useProducers } from "../hooks/useProducers";
import { BestProducersRoutes } from "./BestProducersRoutes";
import { ProducerRoutes } from "./ProducerRoutes";

const Tab= createBottomTabNavigator();

export function AppRoutes() {
    const response = useProducers({bestProducers: false})

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={ProducerRoutes} />
                <Tab.Screen name='Melhores Produtores' component={BestProducersRoutes} />
            </Tab.Navigator>
            {/* {response?.list && response.list.length > 0  && 
        
          <Basket 
            producer={response.list[0]}
          />
        } */}
        </NavigationContainer>
    )
}