import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/pages/login/login";
import Register from "./src/pages/register/register";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


