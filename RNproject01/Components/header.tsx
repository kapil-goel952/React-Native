import { useState } from 'react'
import { View, StyleSheet, Image, Pressable, Text } from 'react-native'
import { router } from "expo-router";
export default function header() {
    const [isShow,setisShow]=useState(false)
    return (
        <View style={styles.main}>
            <Image
                source={{ uri: "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" }}
                style={styles.logo}
            />
            <View 
            style={styles.buttons}>
                <Pressable
                    onPress={() => { 
                        return(
                            router.push("/Home")
                        )  
                    }}
                    style={styles.Pressable}
                >
                    <Text>
                        Home
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        return(
                            router.push("/Accounts")
                        )
                     }}
                    style={styles.Pressable}
                >
                    <Text>
                        Profile
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        height: 50,
        backgroundColor: 'rgb(192, 192, 192)',
        position: "absolute",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    logo: {
        height: 30,
        width: 30,
        borderRadius: 5,
        margin: 10
    },
    Pressable: {
        backgroundColor: 'rgb(100, 98, 98)',
        position: "relative",
        marginRight:14,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:7,
        paddingRight:7,
        borderRadius:4
    },
    buttons:{
        flexDirection:"row",
    }
})
