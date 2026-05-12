import { useState } from 'react'
import { Pressable, Alert, View, ScrollView, Text, Image, ImageBackground, Button, StatusBar, ActivityIndicator, StyleSheet, Dimensions, Modal } from "react-native";
import Header from '../Components/header'
export default function home() {
    const [isShow, setisShow] = useState(false);
    return (
        <ImageBackground
            source={{
                uri: "https://images.unsplash.com/photo-1668394559082-ec8de901fe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww",
            }}
            style={{
                flex: 1,
        }}>
            <View style={{
                flex: 1,
            }}>
                <StatusBar barStyle={"dark-content"} backgroundColor={"red"} />

                <ScrollView
                    style={design.ScrollView}
                >
                    <Header/>
                </ScrollView>
            </View>
        </ImageBackground>

    )
}
const design = StyleSheet.create(
    {
        modal: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey"
        },
        ScrollView: {
            flex: 1,
            marginTop: 33,
            paddingBottom: 20,

        }
    })
