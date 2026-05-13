import { View, StyleSheet } from 'react-native'
import Footer from '../Components/Footer'

export default function Profile() {
    return (
        <View
            style={
                styles.Footer
            }>
            <Footer />
        </View>

    )
}

const styles = StyleSheet.create({
    Footer: {
        position: "absolute",
        width: "100%",
        bottom: 0
    },
})