import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BestProducersRoutes } from "./BestProducersRoutes";
import { ProducerRoutes } from "./ProducerRoutes";

import HeartSVG from '../assets/coracao.svg'
import HomeSVG from '../assets/home.svg'

const Tab= createBottomTabNavigator();

export function AppRoutes() {

    return (
        <NavigationContainer>
            <Tab.Navigator 
              screenOptions={({ route }) => ({
                  headerShown: false,
                  tabBarIcon: ({ color }) => {
                    let Icon = HomeSVG

                    if (route.name === 'Melhores Produtores') {
                      Icon = HeartSVG
                    }

                    return <Icon color={color} />
                  },
                  tabBarActiveTintColor: '#2a9f85',
                  tabBarInactiveTintColor: '#c7c7c7',
                  tabBarLabelStyle: {
                    fontSize: 12,
                  }
              })}
            >
                <Tab.Screen name='Home' component={ProducerRoutes} />
                <Tab.Screen name='Melhores Produtores' component={BestProducersRoutes} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}