import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

export default class Timer extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style = {styles.upper}>
          <Text style= {styles.time}> 25:00 </Text>
        </View>
        <View style = {styles.lower}>
          <Button iconName = "play-circle-o" onPress={() => alert('how are you doing')}/>
          <Button iconName = "stop-circle" onPress={() => alert('stop it!!!')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }, 
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
})