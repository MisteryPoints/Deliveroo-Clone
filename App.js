import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from "nativewind";
import HomeScreen from './screens/HomeScreen';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator()

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={HomeScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 