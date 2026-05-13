import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";



export default function saved_profile(props: any) {

    return (
        <View style={styles.main}>
            <View>
                <Image
                    source={props.image}
                    style={styles.Image}
                />
            </View>

            <View>
                <Text
                    style={styles.role}
                >
                    {props.role}
                </Text>
                <Text
                    style={styles.company}>
                    {props.company}
                </Text>
                <Text
                    style={styles.flexibility}>
                    {props.flexibility}
                </Text>


            </View>
            <View
            >
                <Pressable
                    style={styles.Pressable}
                >
                    <Image
                        source={{ uri: "https://img.icons8.com/?size=100&id=59740&format=png&color=7950F2" }}
                        style={styles.logo}
                    />
                </Pressable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        width: "99%",
        borderWidth: 1,
        padding: 10,
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 8,
        borderColor: "rgb(221, 207, 207)",
        justifyContent: "space-between"
    },
    Image: {
        height: 30,
        width: 30,
        borderRadius: 5,
    },
    role: {
        fontSize: 20,
        fontWeight: 700,
    },
    company: {
        fontSize: 15,
        fontWeight: 700,
    },
    flexibility: {
        fontSize: 13,
        color: "rgb(95, 90, 90)"
    },
    Pressable: {
        margin: 20,
        textAlign: 'right'
    },
    logo: {
        height: 25,
        width: 25,
        borderRadius: 50,
        marginLeft: 10
    },
});