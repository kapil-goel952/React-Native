import { View, Text ,ActivityIndicator} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {

  useEffect(() => {

    setTimeout(() => {
      router.replace("/Home");
    }, 3000);

    }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(109,31,27)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
        }}
      >
        MY APP
      </Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}





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