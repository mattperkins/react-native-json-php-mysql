import React from 'react';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { getParagraphs } from '../util/DataManager';
import ListItem from '../components/ListItem';

export default class Page1 extends React.Component {
  state = {
    loading: true,
    paragraphs: [],
  };
  componentDidMount() {
    getParagraphs()
      .then(res => this.setState({
        loading: false,
        paragraphs: res
      }));
  }
  render() {
    const { navigation } = this.props;
    const { loading, paragraphs } = this.state;

    if (loading) {
      return <ActivityIndicator style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
      }} />;
    }
    return (
      <View>
        <View>
          <FlatList
            data={paragraphs}
            renderItem={({ item }) => (
              <ListItem name={item.name} onPress={() => navigation.navigate('Page2')} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
};


