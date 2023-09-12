import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

function Input({ label, onChangeText, placeholder, style, inputStyle }) {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.label}>{label}</Text>
        <TextInput style= {[styles.input,inputStyle]} placeholder={placeholder} onChangeText={onChangeText}/>
    </View>
  )
}

export default Input;