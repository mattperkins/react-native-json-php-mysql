import { createAppContainer, createStackNavigator } from 'react-navigation';

import Page1 from '../screens/Page1';

const MainStack = createStackNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      headerTitle: 'Page 1',
    }
  }
});

export default createAppContainer(MainStack);