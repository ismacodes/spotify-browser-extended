import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PreviewScreen from "./screens/PreviewScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#fff',
            }
          }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="PreviewScreen" 
          component={PreviewScreen} 
        />
        <Stack.Screen 
          name="DetailsScreen" 
          component={DetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


