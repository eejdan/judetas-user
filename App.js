import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.app}>
        <View style={styles.container}>
          <Text>Testasd</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight
  },
  app: {
    flex: 1
  },
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
