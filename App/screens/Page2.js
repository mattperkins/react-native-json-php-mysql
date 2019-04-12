import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { getParagraphs } from '../util/DataManager';
// import ListItem from '../components/ListItem';

export default class Page2 extends React.Component {
  state = {
    loading: true,
    paragraphs: [],
  };
  componentDidMount() {
    getParagraphs(this.props.navigation.getParam('baz'))
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

      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        {paragraphs.map(item => <Text key={item.id}>{item.paragraph}</Text>)}

      </View>


    );
  }
};


