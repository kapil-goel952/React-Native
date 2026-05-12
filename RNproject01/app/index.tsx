import { useState } from "react";
import { Pressable, Alert, View, ScrollView, Text, Image, ImageBackground, Button, StatusBar, ActivityIndicator, StyleSheet, Dimensions, Modal } from "react-native";
import Welcome from "../Components/Cards"
import Home from "../Components/Home"
import Header from "../Components/header"



export default function HomeScreen() {
  const [move, Seta] = useState(false)
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1668394559082-ec8de901fe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww",
      }}
      style={{
        flex: 1,
      }}
    >
      <View style={{
        flex: 1,
      }}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"red"} />

        <ScrollView
          style={design.ScrollView}
        >
          <Header/>
          <Home/>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const design =StyleSheet.create(
 { 
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  ScrollView: {
    flex: 1,
    marginTop: 10,
    paddingTop: 30,
    paddingBottom: 20,
   
  }
})




          {/* <Welcome name="kapil" imge="https://images.unsplash.com/photo-1635094742897-3f0014ccc07b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVjYXRpfGVufDB8fDB8fHww"/>
      <Welcome name="Raman" imge="https://images.unsplash.com/photo-1635094742897-3f0014ccc07b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVjYXRpfGVufDB8fDB8fHww"/>
      <Welcome name="Varun" imge="https://images.unsplash.com/photo-1635094742897-3f0014ccc07b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVjYXRpfGVufDB8fDB8fHww"/>
      <Welcome name="kamal" imge="https://images.unsplash.com/photo-1635094742897-3f0014ccc07b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVjYXRpfGVufDB8fDB8fHww"/>
      

          <View style={{
            margin: 20,
            padding: 20
          }}>
            <Button title="click me" onPress={() => { console.log("buton chal gyaaa") }} />
          </View>
          <View style={{
            margin: 20,
            padding: 20
          }}>
            <Text>Go to new window</Text>
            <Button
              title="book now"
              color={"black"}
              onPress={() => Seta(true)} />
            <ActivityIndicator size={"large"} color={'red'} />
            <Modal
              visible={move}
              animationType="fade">
              <View style={{

              }}>
                <Text>Hello Modal</Text>
                <Button
                  title="close"
                  color={"black"}
                  onPress={() => Seta(false)}
                />
              </View>
            </Modal>
          </View> */}