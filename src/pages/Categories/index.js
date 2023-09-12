import { View, Text, Image,  FlatList } from 'react-native'
import React from 'react'
import styles from './style';
import { DATA } from './data';
import CategoryItem from './components/CategoryItem';

const Categories = () => {
  const renderItem = ({ item }) => {
    return <CategoryItem item={item} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Categories</Text>
        <Image style={styles.image} source={require("../../constants/assets/person.png")} />
      </View>
      <View style={styles.categories}>
        <FlatList data={DATA} renderItem={renderItem} />
      </View>
    </View>
  )
}
export default Categories;