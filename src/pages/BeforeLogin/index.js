import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const BeforeLogin = () => {

const navigation =useNavigation();

  return (
    <ImageBackground style={styles.background} source={require("../../constants/assets/plane.png")}>
      <Text style={styles.title}>Let's enjoy your Vacation!</Text>
      <View style={styles.container}>
        <Button style={styles.btn} text={"Login"} textStyle={styles.buttonText} onPress={() => navigation.navigate("Login")}/>
        <View style={styles.innerContainer}>
          <Button style={styles.innerBtn} text={"Register"} textStyle={styles.buttonText} onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default BeforeLogin;