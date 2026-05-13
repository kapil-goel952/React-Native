import { useState } from 'react'
import { Pressable, Alert, View, ScrollView, Text, Image, ImageBackground, Button, StatusBar, ActivityIndicator, StyleSheet, Dimensions, Modal } from "react-native";
import Footer from '../Components/Footer'
import Body from '../core components/body'
import Recomended_Jobs from '../Components/Recommended/Recomended_Jobs'

export default function home() {
    const [isShow, setisShow] = useState(false);
    return (
        <View
            style={design.main}>
            <View
                style={{
                    flex: 1,
                }}>
                <StatusBar barStyle={"dark-content"} backgroundColor={"red"} />
                <View
                    style={
                        design.body
                    }>
                   <Recomended_Jobs/>
                </View>
                <View
                    style={
                        design.Footer
                    }>
                    <Footer />
                </View>

            </View>
        </View>
    )
}
const design = StyleSheet.create(
    {
        main:
        {
            backgroundColor: "#fefefe",
            height: "100%",
            width: "100%",
        },
        modal: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey"
        },
        ScrollView: {
            flex: 1,
            marginTop: 33,


        },
        Footer: {
            position: "absolute",
            width: "100%",
            bottom:0
        },
        body: {
            margin: 10
        }
    })
