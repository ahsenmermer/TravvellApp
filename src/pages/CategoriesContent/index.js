import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { DATA } from "./data"
import ContentItem from './components/ContentItemm';

const CategoriesContent = () => {

  const navigation = useNavigation()

  const renderItem = ({ item }) => {
    return <ContentItem item={item}/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Beach</Text>
        <Image style={styles.image} source={require("../../constants/assets/person.png")} />
      </View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  )
}
export default CategoriesContent;

/** */