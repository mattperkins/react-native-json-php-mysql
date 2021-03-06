import { createAppContainer, createStackNavigator } from 'react-navigation';

import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import Page4 from '../screens/Page4';

const MainStack = createStackNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      headerTitle: 'Page 1',
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      headerTitle: 'Page 2',
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      headerTitle: 'Page 3',
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      headerTitle: 'Page 4',
    }
  }
});

export default createAppContainer(MainStack);