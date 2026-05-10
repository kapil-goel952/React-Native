import { View,ScrollView, Text, Image,ImageBackground, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
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
        flex:1,
        // top: (height - width) / 2,
        // left: -(height - width) / 2,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          margin:12,

          paddingTop:30,
          paddingBottom:20,
          paddingRight:20,
          paddingLeft:20,
          // justifyContent: "center",
          // alignItems: "center",
            // transform: [{ rotate: "-90deg" }],
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "black",
            margin:20
          }}
        >
          sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
        </Text>
        <View><Image source={{uri:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
        style={{
          height:100,width:150,margin:20
          // position:"absolute"
        }}></Image></View>
        <Text
          style={{
            fontSize: 15,            color: "black",

            margin:20
          }}
        >
          
          sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
        </Text>
          <View><Image source={{uri:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
        style={{
          height:100,width:150,margin:20
          // position:"absolute"
        }}></Image></View>
        <Text
          style={{
            fontSize: 15,            color: "black",

            margin:20
          }}
        >
          sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
        </Text>
          <View><Image source={{uri:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
        style={{
          height:100,width:150,margin:20
          // position:"absolute"
        }}></Image></View>
        <Text
          style={{
            fontSize: 15,            color: "black",

            margin:20
          }}
        >
          sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
        </Text>
          <View><Image source={{uri:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
        style={{
          height:100,width:150,margin:20
          // position:"absolute"
        }}></Image></View>
        <Text
          style={{
            fontSize: 15,            color: "black",

            margin:20
          }}
        >
          sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
        </Text>
          <View><Image source={{uri:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
        style={{
          height:100,width:150,margin:20
          // position:"absolute"
        }}></Image></View>
        <Text
          style={{
            fontSize: 15,            color: "black",

            margin:20
          }}
        >
          sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
        </Text>
          <View><Image source={{uri:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
        style={{
          height:100,width:150,margin:20
          // position:"absolute"
        }}></Image></View>
      </ScrollView>
    </ImageBackground>
  );
}


{}