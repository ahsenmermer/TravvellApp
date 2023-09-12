import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';


const Description = () => {
    return (
        <ImageBackground style={styles.image} source={require("../../constants/assets/beach3.png")}>
            <View style={styles.titleContainer}>
                <View style={styles.titles}>
                    <Text style={styles.title}>Fransız Polinezyası</Text>
                    <Text style={styles.inTitle}>Bora Bora</Text>
                </View>
            </View>
            <View style={styles.like}>
                <Text >❤</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.hotelContainer}>
                        <Image style={styles.inImage} source={require("../../constants/assets/hotell.png")} />
                        <Text style={styles.text}>Hotel</Text>
                    </View>
                    <View style={styles.hotelContainer}>
                        <Image style={styles.inImage} source={require("../../constants/assets/time.png")} />
                        <Text style={styles.text}>3 Days</Text>
                    </View>
                    <View style={styles.hotelContainer}>
                        <Image style={styles.inImage} source={require("../../constants/assets/sun.png")} />
                        <Text style={styles.text}>Sunny</Text>
                    </View>
                    <View style={styles.hotelContainer}>
                        <Image style={styles.inImage} source={require("../../constants/assets/planee.png")} />
                        <Text style={styles.text}>09 July</Text>
                    </View>
                </View>
                <View style={styles.personsRow}>
                    <View style={styles.person}>
                        <Image source={require("../../constants/assets/women.png")} />
                        <Image style={styles.men} source={require("../../constants/assets/women.png")} />
                        <Image style={styles.men} source={require("../../constants/assets/men.png")} />
                        <View style={styles.plus}>
                            <Text style={styles.pluss}>+88</Text>
                        </View>
                    </View>
                    <View style={styles.trip}>
                        <TouchableOpacity ><Text style={styles.plan}>Trip Plain</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.descTitle}>Description</Text>
                    <Text style={styles.review}>Review</Text>
                </View>
                <Text style={styles.lorem}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                     graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century 
                     who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                      type specimen book. It usually begins with:</Text>
            </View>
        </ImageBackground>
    )
}

export default Description;