import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstOnboarding from '../first-onboarding'
import SecondOnboarding from '../second-onboarding'
import ThirdOnboarding from '../third-onboarding'

const MainStack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName='FirstOnboarding'
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name='SecondOnboarding' component={SecondOnboarding} />
      <MainStack.Screen name='FirstOnboarding' component={FirstOnboarding} />
      <MainStack.Screen name='ThirdOnboarding' component={ThirdOnboarding} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigation