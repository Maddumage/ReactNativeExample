import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './SplashScreen';
import { AppStackNavigator } from './AppStack/AppStackNavigator';


export const MainSwitchNavigator = createAppContainer(createSwitchNavigator(
    {
        Splash: SplashScreen,
        App: AppStackNavigator
    },
    {
        initialRouteName: 'Splash',
    }
));