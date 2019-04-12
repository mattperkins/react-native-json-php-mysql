import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Page 3</Text>
    <Button
      title="Go to page 4"
      onPress={() => navigation.navigate('Page4')}
    />
  </View>
)


