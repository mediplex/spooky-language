import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, UnitListScreen, LessonListScreen, SettingsScreen } from '../screens';

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    LessonListScreen: LessonListScreen,
    UnitListScreen: UnitListScreen,
    SettingsScreen: SettingsScreen
  },
  {
    initialRouteName: 'HomeScreen'
  }
);

export const AppContainer = createAppContainer(RootStack);

export default { AppContainer };
