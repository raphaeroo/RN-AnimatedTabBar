import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const App: React.FC = () => (
  <View style={styles.container}>
    <Text>Olá Mundo</Text>
  </View>
);
