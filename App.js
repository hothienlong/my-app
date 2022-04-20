import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeViewAndroid from "./SafeViewAndroid";

export default function App() {
  console.log("App")

  let x;

  x = 2;
  x.toString()
j.
  acc;j
;;;l;'k'+k;
  const handlePress = () => {
    console.log("Press")
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Text onPress={handlePress}>Hello</Text>
        {/*
         <Image source={require('./assets/splash.png')} />
  
*/}      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',

  },
});
