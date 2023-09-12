import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useNavigation } from '@react-navigation/native'

const Register = () => {

  const navigation = useNavigation()

  return (
    <ImageBackground style={styles.backgroundLogin} source={require("../../constants/assets/seaa.png")}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.container}>
        <Button style={styles.btnGoogle}  >
          <Image source={{ uri: "https://www.webtekno.com/images/editor/default/0001/29/0c2ab84a6be711f60abfc83c8612d56e340df22f.jpeg" }} style={styles.image} />
          <Text>With Google</Text>
        </Button>
        <Button style={styles.btnFacebook} >
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" }} style={styles.faceImage} />
        </Button>
        <Button style={styles.btnTwitter} >
          <Image source={{ uri: "https://turbologo.com/articles/wp-content/uploads/2019/07/twitter-bird-logo.png.webp" }} style={styles.twitterImage} />
        </Button>
      </View>
      <Text style={styles.text}>Or with Email</Text>
      <View style={styles.btnContainer}>
        <Input inputStyle={styles.inputEmail} placeholder={"User Name"} />
        <Input inputStyle={styles.inputEmail} placeholder={"Your Email"} />
        <Input inputStyle={styles.inputPassword} placeholder={"********"} />
        <Button style={styles.btnLogin} text={"Register"} textStyle={styles.buttonText} onPress={() => navigation.navigate("Home")} />
      </View>
    </ImageBackground>
  )
}

export default Register;