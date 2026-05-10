import { useState } from "react";
import { Pressable, View, ScrollView, Text, Image, ImageBackground, Button, Dimensions, Modal } from "react-native";

// const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [move, Setmove] = useState(false)
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1668394559082-ec8de901fe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww",
      }}
      // resizeMode="cover"
      style={{
        // width: height,   // swapped
        // height: width,  // swapped
        // transform: [{ rotate: "90deg" }],
        // position: "absolute",
        flex: 1,
        // top: (height - width) / 2,
        // left: -(height - width) / 2,
      }}
    >
      <View style={{
        flex: 1,
      }}>
        <ScrollView
          style={{
            flex: 1,
            margin: 12,
            paddingTop: 30,
            paddingBottom: 20,
            paddingRight: 20,
            paddingLeft: 20,

            // justifyContent: "center",
            // alignItems: "center",
            // transform: [{ rotate: "-90deg" }],
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "black",
              margin: 20
            }}
          >
            sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
          </Text>
          <View><Image source={{ uri: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={{
              height: 100, width: 150, margin: 20
              // position:"absolute"
            }}></Image>
            <Button
              title="click me"
              onPress={() => {
                console.log("buton chal gyaaa")

              }} />

          </View>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              margin: 20
            }}
          >

            sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
          </Text>
          <View><Image source={{ uri: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={{
              height: 100, width: 150, margin: 20
              // position:"absolute"
            }}></Image>
            <Button title="click me" onPress={() => { console.log("buton chal gyaaa") }} />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              margin: 20
            }}
          >
            sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
          </Text>
          <View><Image source={{ uri: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={{
              height: 100, width: 150, margin: 20
              // position:"absolute"
            }}></Image>
            <Button title="click me" onPress={() => { console.log("buton chal gyaaa") }} />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              margin: 20
            }}
          >
            sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
          </Text>
          <View><Image source={{ uri: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={{
              height: 100, width: 150, margin: 20
              // position:"absolute"
            }}></Image>
            <Button title="click me" onPress={() => { console.log("buton chal gyaaa") }} />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              margin: 20
            }}
          >
            sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
          </Text>
          <View><Image source={{ uri: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={{
              height: 100, width: 150, margin: 20
              // position:"absolute"
            }}></Image>
            <Button title="click me" onPress={() => { console.log("buton chal gyaaa") }} />

          </View>
          <Pressable onPress={() => console.log("text clickeddd......")
          }>
            <Text style={{
              fontSize: 15,
              color: "black",
              margin: 20
            }}>
              trial of Pressable
            </Text>
          </Pressable>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              margin: 20
            }}
          >
            sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
          </Text>
          <View><Image source={{ uri: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={{
              height: 100, width: 150, margin: 20
              // position:"absolute"
            }}></Image>
            <Button title="click me" onPress={() => { console.log("buton chal gyaaa") }} />
          </View>


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
            <Button title="click me" onPress={() => { console.log("buton chal gyaaa") }} />
          </View>

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
              onPress={() => Setmove(true)} />

            <Modal visible={move} animationType="slide">

              <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                
              }}>

                <Text>Hello Modal</Text>

                <Button
                  title="close"
                  onPress={() => Setmove(false)}
                />

              </View>

            </Modal>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}


