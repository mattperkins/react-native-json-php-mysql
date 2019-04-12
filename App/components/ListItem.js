import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
);