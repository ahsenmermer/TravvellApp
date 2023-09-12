import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style';
import Input from '../../components/Input'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.text}>Hi <Text style={styles.otherText}>Jont Hennry!</Text></Text>
          <Text style={styles.title}>let's discovery a new Adventure</Text>
        </View>
        <Image style={styles.image} source={require("../../constants/assets/person.png")} />
      </View>
      <Input inputStyle={styles.input} placeholder={"Search.."} />
      <View style={styles.iconContainer}>
        <View >
          <TouchableOpacity style={styles.iconItemContainer} onPress={() => navigation.navigate("Categories")}>
            <Image style={styles.camping} source={require("../../constants/assets/camping.png")} />
          </TouchableOpacity>
          <Text style={styles.inText}>Camping</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconItemContainer} onPress={() => navigation.navigate("Categories")}>
            <Image style={styles.camping} source={require("../../constants/assets/beach.png")} />
          </TouchableOpacity>
          <Text style={styles.inText}>Beach</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconItemContainer} onPress={() => navigation.navigate("Categories")}>
            <Image style={styles.camping} source={require("../../constants/assets/kayak.png")} />
          </TouchableOpacity>
          <Text style={styles.inText}>Rowing</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconItemContainer} onPress={() => navigation.navigate("Categories")}>
            <Image style={styles.camping} source={require("../../constants/assets/mountain.png")} />
          </TouchableOpacity>
          <Text style={styles.inText}>Mountains</Text>
        </View>
      </View>
      <Text style={styles.titleDisc}>Discover</Text>
      <View style={styles.options}>
        <Text style={styles.titleTrend}>Trend</Text>
        <Text style={styles.titleOptions}>Featured</Text>
        <Text style={styles.titleOptions}>Top Visit</Text>
      </View>
      <ImageBackground imageStyle={styles.inImage} source={require("../../constants/assets/paris.png")}>
      </ImageBackground>
    </View>
  )
}

export default Home;