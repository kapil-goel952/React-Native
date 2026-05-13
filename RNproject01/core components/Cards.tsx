import { View, Text, Image, Button, Alert, StyleSheet, Pressable } from 'react-native'

function Cards(props: any) {
    return (
        <View
            style={{
                backgroundColor: "lightblue",
                margin: 10,
                padding: 10,
                borderRadius: 20
            }}
        >
            <View style={styles.Header}>
                <Text style={styles.MainText}>
                    {props.name}
                </Text>
                <Image
                    source={{ uri: props.imge }}
                    style={styles.Image}
                />
            </View>

            <Text
                style={styles.Text}
            >
                sooooojaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus numquam qui, amet quos architecto provident perspiciatis nam molestias voluptatum harum veritatis odit omnis impedit exercitationem expedita velit nihil hic.
            </Text>
            <View style={{
                    marginLeft:30
            }}>
                <Pressable  
                    onPress={() => Alert.alert("text clickeddd......")}
                    style={styles.button}
                >
                    <Text>Click ME</Text>                       
                </Pressable>
            </View>
        </View>
    )
}

export default Cards
const styles = StyleSheet.create(
    {
        Image: {
            height: 100,
            width: 100,
            margin: 20,
            borderRadius: 50
        },
        Text: {
            fontSize: 15,
            color: "black",
            margin: 15,
            fontFamily: "devnagri",
            marginLeft: 30,
        },
        Header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin:30
        },
        MainText:{
            fontSize:30,
            color:"purple"
        },
        button:{
            backgroundColor:"grey",
            height:30,
            width:70,
            borderRadius:7,
            justifyContent:"center",
            padding:8
        }
    }
)