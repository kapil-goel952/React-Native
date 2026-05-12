import { useState } from 'react'
import { Text,StyleSheet,View} from 'react-native'
import Header from "../Components/header"


export default function home(){
    const [isShow,setisShow]=useState(false);
    return(
        <View style={styles.mainview}>
            <Header/>
        </View>        

    )

}
const styles=StyleSheet.create({
    mainview:{
        flex:1,

    }
})
