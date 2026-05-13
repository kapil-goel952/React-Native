import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";



export default function Recommended(props: any) {

    return (
        <View style={styles.main}>
            <View>
                <Image
                    source={{ uri: props.image }}
                    style={styles.Image}
                />
            </View>

            <View>
                <Text>{props.Post}</Text>

                <Text>{props.Flexibility}</Text>

                <Text>{props.company}</Text>

            </View>
            <View>
                <Pressable>
                    <Text>
                        Apply
                    </Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "90%",
        borderWidth: 1,
        padding: 10,
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        marginVertical: 10,
    },
    Image: {
        height: 30,
        width: 30,
        borderRadius: 5,
    }
});