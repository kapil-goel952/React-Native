import {StyleSheet,View,Text} from 'react-native'

export default function body(){
    return(
        <View
        style={styles.mainview}>
            <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis dignissimos, neque, dolorem error officiis dolore rerum consectetur dolores qui dicta voluptatem reprehenderit aliquam eaque beatae. Cum placeat recusandae perspiciatis.
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    mainview:{
        height:700,
        width:"100%",
        backgroundColor:"rgb(206, 231, 174)",
        borderRadius:10,
        padding:20
    }
    
})