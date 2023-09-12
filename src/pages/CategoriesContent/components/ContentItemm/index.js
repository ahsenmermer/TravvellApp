import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "./style"
import { useNavigation } from '@react-navigation/native'

 const ContentItem =  ({ item }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.avustralyaImage}>
    <TouchableOpacity onPress={() => navigation.navigate("Description")}>
      <Image style={styles.image} source={item.image} />
    </TouchableOpacity>
    <View style={styles.avustralyaTitle}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.like}>{item.like}</Text>
    </View>
    <Text style={styles.location}>{item.location}</Text>
  </View>
  )
}

export default ContentItem;