import {View,Text,Image,Button,Alert} from 'react-native'

function Welcome (props:any) {
  return (
    <View
    style={{
        backgroundColor:"lightblue",
        margin:10,
        padding:10,
        borderRadius:20
    }}>
        <Text style={{
            fontFamily:"devnagri",
            fontSize:30,
            marginLeft:30,
        }}>
            {props.name}
        </Text>
         <Text
            style={{
                fontSize: 15,
                color: "black",
                margin: 20
                }}
            >
                sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
            </Text>
            <View>
                <Image 
                    source={{ uri: props.imge }} 
                    style={{
                        height: 100, 
                        width: 150, 
                        margin: 20
                    }}>
                </Image>
                <Button
                    title="click me"
                    onPress={() => 
                    Alert.alert("invalid input")}
                    />
            </View>
        </View>
    )
}

export default Welcome
