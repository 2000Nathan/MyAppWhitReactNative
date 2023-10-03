import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/pages/login";
import Register from "./src/pages/register";
import Home from "./src/pages/Home";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


