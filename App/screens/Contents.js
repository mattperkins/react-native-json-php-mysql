import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getPages } from '../util/DataManager';
// import ListItem from '../components/ListItem';

export default class Contents extends React.Component {
  state = {
    loading: true,
    pages: [],
  };
  componentDidMount() {
    getPages()
      .then(res => this.setState({
        loading: false,
        pages: res
      }));
  }
  render() {
    const { navigation } = this.props;
    const { loading, pages } = this.state;

    if (loading) {
      return <ActivityIndicator style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
      }} />;
    }
    return (

      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        {pages.map(item => <TouchableOpacity
          onPress={() => navigation.navigate('Page2',
            { baz: item.id })}
          key={item.id}>
          <Text
            style={{ marginVertical: 10 }}>
            {item.page}
          </Text></TouchableOpacity>)}
      </View>

    );
  }
};


