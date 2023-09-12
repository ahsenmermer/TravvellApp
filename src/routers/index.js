import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Intro from '../pages/Intro';
import BeforeLogin from "../pages/BeforeLogin";
import Login from "../pages/Login";
import Register from "../pages/Register"
import Categories from "../pages/Categories"
import Home from "../pages/Home"
import CategoriesContent from "../pages/CategoriesContent"
import Description from '../pages/Description';

const Stack = createNativeStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Intro" component={Intro} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="BeforeLogin" component={BeforeLogin} options={{
                    headerShown: false
                    // title:"Detay",
                    // headerTitleAlign:"center",
                    // headerTitleStyle:{color:"orange"},
                }} />
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                    // title:"Detay",
                    // headerTitleAlign:"center",
                    // headerTitleStyle:{color:"orange"},
                }} />
                <Stack.Screen name="Register" component={Register} options={{
                    headerShown: false
                    // title:"Detay",
                    // headerTitleAlign:"center",
                    // headerTitleStyle:{color:"orange"},
                }} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                    // title:"Detay",
                    // headerTitleAlign:"center",
                    // headerTitleStyle:{color:"orange"},
                }} />
                <Stack.Screen name="Categories" component={Categories} options={{
                    headerShown: false
                    // title:"Detay",
                    // headerTitleAlign:"center",
                    // headerTitleStyle:{color:"orange"},
                }} />
                <Stack.Screen name="CategoriesContent" component={CategoriesContent} options={{
                    headerShown: false
                    // title:"Detay",
                    // headerTitleAlign:"center",
                    // headerTitleStyle:{color:"orange"},
                }} />
                <Stack.Screen name="Description" component={Description} options={{
                    headerShown: false
                    // title:"Detay",
                    // headerTitleAlign:"center",
                    // headerTitleStyle:{color:"orange"},
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;