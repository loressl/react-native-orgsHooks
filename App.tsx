/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useProducers } from './src/hooks/useProducers';
import { Basket } from './src/screens/Basket';
import { Home } from './src/screens/Home';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const response = useProducers({bestProducers: false})

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Home bestProducers={false} />
      {/* {response?.list && response.list.length > 0  && 
      
        <Basket 
          producer={response.list[0]}
        />
      } */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default App;
