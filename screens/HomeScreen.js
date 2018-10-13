import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  pressMe = () => {
    console.dir('pressMe');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HomeScreen!</Text>

        <Button title="PressMe" onPress={this.pressMe} />
      </View>
    );
  }
  
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
