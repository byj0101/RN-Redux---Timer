import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

const timeFormat = (time) => {
  let minutes = Math.floor(time/60);
  time -= minutes*60
  let seconds = parseInt(time % 60, 10)
  return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export default class Timer extends Component {

  state = {
    timerInterval: ''
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.isPlaying);
    const currentProps = this.props;
    if(!currentProps.isPlaying && nextProps.isPlaying){
      //start the interval
      const timerInterval = setInterval(() => {
        currentProps.addSecond()
      }, 1000)
      this.setState({timerInterval})
    } else if(currentProps.isPlaying && !nextProps.isPlaying){
      //stop the interval
      clearInterval(this.state.timerInterval)
    }
  }

  render(){
    const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
    console.log(this.props)
    return (
      <View style = {styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style = {styles.upper}>
          <Text style= {styles.time}> {timeFormat(timerDuration-elapsedTime)} </Text>
        </View>
        <View style = {styles.lower}>
          {!isPlaying && (<Button iconName = "play-circle-o" onPress={startTimer}/>)}
          { isPlaying && (<Button iconName = "stop-circle" onPress={restartTimer}/>)}
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