import { View, Text, StyleSheet } from "react-native";

import * as React from 'react';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.bottomHeaderBar}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Галерея гифок</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { width: "100%", height: "10%" },
  bottomHeaderBar: {
    width: "100%",
    height: 70,
    backgroundColor: "#90a397",
    padding: 5,
    paddingTop:10,
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    marginVertical: "2%",
    marginHorizontal: "15%",
    
    
  },
  headerText: {

    fontFamily: "sans-serif-light",
    fontSize: 27,
    color:'#422b3a',
    fontWeight: "bold",
    
  },
});

export default Header;