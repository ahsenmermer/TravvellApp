import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({ item }) => {
    const navigation = useNavigation();

    return <TouchableOpacity style={styles.beach} onPress={() => navigation.navigate("CategoriesContent")}>
        <Image style={styles.imageBeach} source={item.image} />
        <View>
            <Text style={styles.titleBeach}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
        </View>
    </TouchableOpacity>
}

export default CategoryItem