import { createAppContainer, createStackNavigator } from 'react-navigation';

import Contents from '../screens/Contents';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import Page4 from '../screens/Page4';

const MainStack = createStackNavigator({
  Contents: {
    screen: Contents,
    navigationOptions: {
      headerTitle: 'Table Of Contents',
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