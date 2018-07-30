import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Button = ({iconName, onPress}) => (
  <TouchableOpacity onPressOut = {onPress}>
    <FontAwesome name={iconName} size={80} color="white"/>
  </TouchableOpacity>
)

Button.prototype = {
  iconName : PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Button;