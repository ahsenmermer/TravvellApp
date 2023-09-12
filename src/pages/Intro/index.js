import { View, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from "./style"

import Button from "../../components/Button"
import { useNavigation } from '@react-navigation/native'

const Intro = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState({ text1: "Let's start your", text2: "Vacation!" });

  const navigation = useNavigation();

  const changeText = () => {
    if (count === 0) {
      setCount(1)
      setText({ text1: "Explore the earth ", text2: "with us!" })
    }
    else if (count === 1) {
      setCount(2)
      setText({ text1: "A new way to ", text2: "Travel" })
    }
    else if(count===2) {

      navigation.navigate("BeforeLogin")
    }
  }

  return (

    <ImageBackground style={styles.backgroundImage} source={require("../../constants/assets/mount.png")}>
      <Text style={styles.title}>{text.text1} <Text style={styles.titleColor}>{text.text2}</Text> </Text>
      <Button style={styles.button} text={"→"} textStyle={styles.buttonText} onPress={changeText} />
    </ImageBackground>

  )
}

export default Intro;