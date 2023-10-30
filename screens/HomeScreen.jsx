import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginView}>
        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Username</Text>
          <TextInput style={styles.inputTextInput}/>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput style={styles.inputTextInput}/>
        </View>
        <Pressable style={styles.enterButton}>

        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#211d2b",
    justifyContent: "center",
    alignItems: "center",
  },
  loginView: {
    width: "82%",
    height: "82%",
    backgroundColor: "#272233",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 18,
    elevation: 8,
    paddingTop: 20,
  },
  welcomeView: {
    width: "90%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2e293b",
    borderRadius: 10,
    marginBottom: 80,
  },
  welcomeText: {
    color: "white",
    fontSize: 28,
    fontWeight: "500"
  },
  inputView: {
    width: "90%",
    height: "12%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 10,
    marginBottom: 25,
  },
  inputText: {
    color: "white",
    marginLeft: 8,
    fontSize: 18
  },
  inputTextInput: {
    width: "100%",
    height: "65%",
    backgroundColor: "darkgray",
    borderRadius: 10,
    marginTop: 2
  },
  enterButton: {
    width: "45%",
    height: "8%",
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
})

export default HomeScreen;