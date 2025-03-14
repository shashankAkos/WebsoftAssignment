import { SafeAreaView } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigations/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App