import { connect } from 'react-redux';
import Timer from './presenter';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoAction } from '../../reducer'; 

function mapStateToProps(state){
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  }
} 

function mapDispatchToProps(dispatch){
  return {
    startTimer: bindActionCreators(tomatoAction.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoAction.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoAction.addSeconds, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);